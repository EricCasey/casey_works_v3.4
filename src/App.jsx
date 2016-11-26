import React, { Component } from 'react';
import Loader from './Loader/Loader.jsx';
import NavBar from './NavBar/NavBar.jsx';
import TopFold from './TopFold/TopFold.jsx';
import FoldTwo from './FoldTwo/FoldTwo.jsx';
import FoldThree from './FoldThree/FoldThree.jsx';
import FoldFour from './FoldFour/FoldFour.jsx';
import FoldFive from './FoldFive/FoldFive.jsx';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
        <NavBar />
        <TopFold />
        <FoldTwo />
        <FoldThree />
        <FoldFour />
        <FoldFive />
      </div>
    );
  }
}

export default App;
