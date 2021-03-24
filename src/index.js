import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import { StateProvider } from './State';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

