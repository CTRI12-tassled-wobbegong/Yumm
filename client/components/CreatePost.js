import React, { useState } from 'react';

function CreatePost(props) {
  //make a state for each input
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [cook_time, setCookTime] = useState('');

  //using value from the
  let display;
  if (props.show === false) {
    display = 'none'
  } else {
    display = 'block'
  }

  //onClick event that triggers the post request
  //send them poster_id
  function handleClick() {
    console.log('hi')
    fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        poster_id: 7,
        description,
        cook_time,
        image,
        category: 'vegan'
      })
    })
    .catch((error) => console.log('ERROR: CreatePost request' + error))
  }

  // return document.getElementById('end').style.display = 'block';
  return(
    <div className='newPost'  style={{display: display}}>
      CREATE A POST HERE
      <form className='form'>

        <label>Description:</label>
        <input
        type='text'
        value={description}
        onChange={(event)=> {setDescription(event.target.value)}}
        name='description'>
        </input><br></br>

        <label>Image:</label>
        <input
        type='text'
        value={image}
        onChange={(event)=> {setImage(event.target.value)}}
        name='image'>
        </input><br></br>

        <label>Cook Time:</label>
        <input
        type='text'
        value={cook_time}
        onChange={(event) => {setCookTime(event.target.value)}}
        name='cook_time'
        ></input><br></br>

        {/* <input type="checkbox" name="veggie1"></input>
        <label for="veggie1"> Vegetarian Recipe</label><br></br>

        <input type="checkbox" name="veggie2"></input>
        <label for="veggie2"> Dairy-Free Recipe</label><br></br> */}
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default CreatePost;