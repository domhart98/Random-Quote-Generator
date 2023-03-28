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
    <div className="container" id="quote-box">
      <h2 className="title">Random Quote Generator</h2>
      <div id="text">
        <div id="quote">"{quotes[rnd].Quote}"</div>
        <div id="author">~ {quotes[rnd].Author}</div>
      </div>
      
      <div  className="row" id="buttons">
      <div className="col-2"></div>
        <div className="col-4" align="center">
          <button className="btn-circle" id="new-quote" onClick={newQuote}>NEW QUOTE</button>
        </div>
        <div className="col-4" align="center">
          <a className="twitter-share-button" href={`https://www.twitter.com/intent/tweet?text="${quotes[rnd].Quote}" - ${quotes[rnd].Author}`} target="_blank" rel="noopener noreferrer" id="tweet-quote">
            <TwitterIcon round={true} className="cursor-pointer hover:opacity-50" id="tweet-quote-button"/>
          </a>
        </div>
        <div className="col-2"></div>
      </div>
      
    </div>
  );
}
export default RandomQuoteGenerator;