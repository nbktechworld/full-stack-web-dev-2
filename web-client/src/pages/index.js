import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Index() {
  const [paragraphStyle, setParagraphStyle] = useState({});
  const [paragraphText, setParagraphText] = useState('Lorem Ipsum');

  function changeBackground(){
    setParagraphStyle({
      backgroundColor: 'lightblue',
      color: 'black',
    });
    setParagraphText('Hello World!');
  }

  const images = [
    'https://www.rd.com/wp-content/uploads/2016/01/04-dog-breeds-dalmation.jpg',
    'https://fthmb.tqn.com/TAO44DCR8TZRNVwD6OlGfFtfi30=/5040x3347/filters:fill(auto,1)/greyhound-dog-outdoors-200346044-001-589608495f9b5874ee23ee68.jpg',
    'https://image.petmd.com/files/styles/863x625/public/CANS_dogsmiling_379727605.jpg?w=1920&q=75',
  ];
  let currentImageIndex = 0;

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    
    document.getElementsByTagName('img')[0].src = images[currentImageIndex];
  }

  function bark() {
    // document.getElementsByClassName('js-audio-player')[0].play();
    document.querySelector('.js-audio-player').play();
  }

  return (
    <div> 
      <Link to="/signup">Sign Up</Link>
      <Link to="/messages">Messages</Link>
      <h1 className="site-heading">Lorem, ipsum dolor.</h1>
      <p className="paragraph" id="first-paragraph" style={paragraphStyle}>{paragraphText}</p>
      <button onClick={changeBackground}>Click here</button>
      <p className="paragraph">Lorem ipsum dolor sit.</p>
      <h2>A Subsection</h2>
      <img src="https://www.rd.com/wp-content/uploads/2016/01/04-dog-breeds-dalmation.jpg" width="150" alt="a Dalmatian dog" />
      <button onClick={nextImage}>Next Image</button>
      <audio src="https://github.com/nbktechworld/introduction-to-html/raw/abcdac58651ba724c40665c82dd55f171534115f/document-two-sections/barking.mp3"  className="js-audio-player"></audio>
      <button onClick={bark}>Pet the dog 🫳🐶</button>
      <p>Lorem, <strong>ipsum</strong> <b>dolor</b> <span className="highlight">sit amet</span> <em>consectetur</em> <i>adipisicing</i>.</p>
      <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls width="200"></video>
      <ol>
        <li>Lorem, ipsum dolor.</li>
        <li>
          <span className="highlight">
            Lorem, ipsum.
          </span>
        </li>
        <li>Lorem.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ol>
      <h3>Lorem, ipsum.</h3>
      <a href="https://www.google.com">Go to Google</a>
      <h4>Lorem, ipsum.</h4>
      <h5>Lorem, ipsum.</h5>
      <h6>Lorem, ipsum.</h6>
    </div>
  );
}
