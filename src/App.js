import './App.css';
import React from 'react';
import RandomQuoteGenerator from './randomQuoteGenerator'
import MarkdownPreviewer from'./markdownPreviewer'
import DrumMachine from './drumMachine'
import Calculator from './calculator'
import Clock from './clock'
import Layout from './layout.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RandomQuoteGenerator />} />
            <Route path="markdown" element={<MarkdownPreviewer />} />
            <Route path="drum" element={<DrumMachine />} />
            <Route path="calculator" element={<Calculator/>}/>
            <Route path="clock" element={<Clock/>}/>
            {/*<Route path="*" element={<NoPage />} />*/}
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

