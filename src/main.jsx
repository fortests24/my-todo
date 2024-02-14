// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// import ReactDOM from 'react-dom';///client
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux';
import './styles/reset.scss';
import './styles/global.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
