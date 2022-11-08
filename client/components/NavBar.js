import React from 'react';

function NavBar() {
  //enter on search or create a button to send the post request

  return(
    <div className='navbar'>
      <input type='text' id='searchBar' placeholder='search'></input>
      <ul><h4>YUMM!!</h4></ul>
      <ul>Messages</ul>
    </div>
  )
}

export default NavBar