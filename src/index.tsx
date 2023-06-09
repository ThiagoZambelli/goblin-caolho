import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rotas from './Rotas';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <RecoilRoot>
        <Rotas />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);


