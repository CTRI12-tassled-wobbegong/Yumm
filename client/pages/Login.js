import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { redirect } from "react-router-dom";

function Login(props) {
  function submitData(event) {
    const userInput = document.getElementById("userIn").value;
    const userPassword = document.getElementById("passIn").value;

    //TODO: update/confirm end point
    fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({ username: userInput, password: userPassword }),
    })
      .then((result) => {
        //TODO: do we need to have a response or return anything?
        if (res.status === 200) {
          return redirect("/user");
        }
        //else if (password and/or username is invalid)
        //send message to user that login failed
      })
      .catch((error) => console.log("ERROR: SubmitData post request:" + error));
  }

  function googleLogin() {
    fetch("/auth/login/federated/google")
      .then((data) => console.log(data))
      .catch((error) => console.log("google login error!!!"));
  }
  //link to signup
  //navigate to sign up page

  //button to submit with an onClick event

  return (
    <div>
      <Header />
      <div className="login">
        <h3>Welcome to YUMM!!</h3>
        <h5>Eat outside the box</h5>
        <form>
          <label></label>
          <input type="text" placeholder="Username" id="userIn"></input>
          <label></label>
          <input type="password" placeholder="Password" id="passIn"></input>
          <p></p>
          <button id="submitBtn" onClick={submitData}>
            Sign In
          </button>
          {/* <a className="button google" onClick={googleLogin}>
            Sign in with Google
          </a> */}
          <a
            className="button google"
            href="/login/federated/accounts.google.com"
          >
            Sign in with Google
          </a>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
