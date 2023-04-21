import React, {useState} from 'react';
import Quotes from './quotes.json';
import './randomQuoteGenerator.css';
import { TwitterIcon } from 'react-share';

function HandleNewQuote() {
  // eslint-disable-next-line
  const [value, setValue] = useState(0);
  return () => setValue(value => Math.floor(Math.random() * Quotes.length));
}



function RandomQuoteGenerator () {
  
  const newQuote = HandleNewQuote();
  let quotes = Quotes
  let rnd = Math.floor(Math.random() * Quotes.length)
  return(
    <div id="quote-box">
      <h2 className="title">RANDOM QUOTE GENERATOR</h2>
      <div id="text">
        <div id="quote">"{quotes[rnd].Quote}"</div>
        <div id="author">~ {quotes[rnd].Author}</div>
      </div>
      
      <div id="buttons-container">
        
          <div>
            <button className="round-button" id="new-quote" onClick={newQuote}>NEW QUOTE</button>
          </div>
          <div>
            <a href={`https://www.twitter.com/intent/tweet?text="${quotes[rnd].Quote}" - ${quotes[rnd].Author}`} target="_blank" rel="noopener noreferrer" id="tweet-quote">
              <img className="round-button" src="./twitter-icon.webp" alt=""/>
            </a>
          </div>
        
      </div>
      
    </div>
  );
}
export default RandomQuoteGenerator;