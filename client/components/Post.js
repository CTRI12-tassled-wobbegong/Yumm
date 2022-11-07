import React, { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';

function Post(props) {

  return(
    <div className='post'>
      <img src={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=768:*'} />
      <span className='tag'>Cook Time: {props.cook_time}</span>
      <div className='post-body'>{props.description}</div>
      <div className='chef'>Cooked by {props.poster_name}</div>
    </div>
  )
}


export default Post