import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar.js';
import Post from '../components/Post.js';
import CreatePost from '../components/CreatePost.js';


function User(props) {
  // store data for posts in an array
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);

//change of state shouldtrigger posting of state components

useEffect(() => {
  //get request
  fetch('/api/post', {
    method: 'GET',
    headers: {
      'Content-Type': 'Application/JSON',
    }
  })
  // for each item, destructure the important elements
  // create a post with this information
  .then((res) => res.json())
  .then((arrOfObjs) => {
    let resultArr = []
    for (let i = 0; i < arrOfObjs.length; i++) {
      resultArr.push(<Post
        poster_name={arrOfObjs[i].poster_name}
        date={arrOfObjs[i].date}
        description={arrOfObjs[i].description}
        category={arrOfObjs[i].category}
        cook_time={arrOfObjs[i].cook_time}
        date={arrOfObjs[i].date}
        //img={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=768'}
        />)
    }
    setPosts(resultArr);
  })
  .catch((err) => {
    console.log('ERROR: In the fetch request for receiving posts ', + err)
  })
}, [])

// function createPosts() {
//   let postArr = [];
//   for (let i = 0; i < 2; i++) {
//     const { poster_id, description } = posts[i];
//     //console.log(poster_id)
//     postArr.push(<Post desc={description}/>)
//     //console.log(poster_id)
//     //
//   }
// }
// const thingsToPost = createPosts();

function displayModal() {
  setModal(!modal);
  console.log('modal changed')

}

    //create post component will need to be returned too
  return(
    <>
      <NavBar />
      <button className='createP' onClick={displayModal}>Add Your Meal</button>
      <CreatePost show={modal} />
      <div className="postContainer">
        {posts}
      </div>

    </>

  )
}

export default User;