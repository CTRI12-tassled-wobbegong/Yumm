import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

function Post(props) {

  return(
    <div className='post'>
      <img src={props.img} />
      <span className='tag'>Cook Time: {props.cook_time}</span>
      <div className='post-body'>{props.description}</div>
      <div className='chef'>Cooked by {props.poster_name}</div>
    </div>
  )
}


export default Post