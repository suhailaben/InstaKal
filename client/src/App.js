import React from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import './App.css';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Navbar />
          <Landing />
          <Footer />
        </div>
    </Provider>
   
  );
}

export default App;
