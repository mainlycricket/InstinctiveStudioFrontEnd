'use client';


// app/page.js or app.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Home from './home';

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
