import React from "react";

function Header(props) {
  return (
    <div className="header">
      <div className="menu">
        <ul className="menu-btn">About</ul>
        <ul className="menu-btn">Sign Up</ul>
        <ul className="menu-btn">Get Verified</ul>
      </div>
      <img
        className="logo"
        src="https://api.logo.com/api/v2/images?format=webp&logo=logo_7237a5e9-ba46-47a3-a29d-f52125a06939&width=2000&quality=100&background=transparent&fit=contain&u=1667719668"
      ></img>
    </div>
  );
}

export default Header;
