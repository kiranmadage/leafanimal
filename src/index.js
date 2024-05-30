import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from "./View/Home/Home"
import {About} from "./View/About/About"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Home /> */}
    <About />
  </>
);


