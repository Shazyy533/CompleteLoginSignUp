import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Our Website</h2>
      <p>Please choose an option:</p>
      <div className="options">
        <Link to="/login" className="option"> {/* Updated link to "/login" */}
          Login
        </Link>
        <Link to="/signup" className="option"> {/* Updated link to "/signup" */}
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
