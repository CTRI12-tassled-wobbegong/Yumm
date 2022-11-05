import React from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import { redirect } from 'react-router-dom';

function Login(props) {
  //useState
  //will take a username
  //wil take a password


  //send username and password to DB
  //with the response will either navigate to user page
  //or generate response 'username and/or password invalid'
function submitData(event) {
  const userInput = document.getElementById('userIn').value;
  const userPassword = document.getElementById('passIn').value;
  // console.log(userInput, userPassword);
  fetch('/checkforuser', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/JSON',
    },
    body: JSON.stringify({userInput, userPassword}),
  })
    .then((result) => {
      //TODO: do we need to have a response or return anything?
      if (res.status === 200) {
        return redirect('/user');
      }
      //else if (password and/or username is invalid)
      //send message to user that login failed
      })
    .catch((error) => console.log('ERROR: SubmitData post request:' + error))
}
//link to signup
//navigate to sign up page


//button to submit with an onClick event

  return(
    <div>
      <Header/>
      <div className="login">
        <form>
            <input type='text' placeholder='Username' id='userIn'></input>
            <input type='password' placeholder='Password' id='passIn'></input>
            <button id='submitBtn' onClick={submitData}>Submit</button>
        </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Login;