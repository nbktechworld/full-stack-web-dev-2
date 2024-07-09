import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="margin-bottom-8">This is the <span className="highlight">sign up</span> page.</div>
      <form method="POST" action="https://jsonplaceholder.typicode.com/users" className="short-length-form">
        <div className="form-group">
          <label for="sign-up-form-email">Email:</label>
          <input type="email" name="email" id="sign-up-form-email" required />
        </div>
        <div className="form-group">
          <label for="sign-up-form-password">Password:</label>
          <input type="password" name="password" id="sign-up-form-password" required />
        </div>
        <div className="form-group">
          <label for="dateOfBirth">Date of Birth:</label>
          <input type="date" name="dateOfBirth" id="dateOfBirth" required />
        </div> 
        <div className="form-group">
          <label>Biography</label>
          <textarea rows="5" name="Biography" required></textarea>
        </div>
        <div className="form-group">
          <div className="margin-bottom-8">Your favorite programming language?</div>
          <div className="radio-group">
            <label>
              <input type="radio" name="favoriteLanguage" value="html" /> HTML
            </label>
            <label>
              <input type="radio" name="favoriteLanguage" value="css" /> CSS
            </label>
            <label>
              <input type="radio" name="favoriteLanguage" value="javascript" /> JavaScript
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Favorite Color:</label>
          <select name="favoriteColor">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
        </div>
        <div>Please agree to the terms below:</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div>
          <input type="checkbox" /> I agree to the terms
        </div>
        <div className="form-group">
          <label><input type="checkbox" /> Subscribe to Newsletter</label>
        </div>
        {/* <input type="submit" value="Register"> */}
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Signup;
