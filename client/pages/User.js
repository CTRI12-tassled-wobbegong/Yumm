import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar.js';
import Post from '../components/Post.js';


function User(props) {
  // store data for posts in an array
  const [posts, setPosts] = useState([]);

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
        poster_id={arrOfObjs[i].poster_id}
        date={arrOfObjs[i].date}
        description={arrOfObjs[i].description}
        category={arrOfObjs[i].category}
        cook_time={arrOfObjs[i].cook_time}
        img={arrOfObjs[i].image}
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

    //create post component will need to be returned too
  return(
    <>
      <NavBar />
      <div className="postContainer">
        {posts}
      </div>

    </>

  )
}

export default User;