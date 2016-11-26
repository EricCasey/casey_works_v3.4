import React, { Component } from 'react';
import './FoldThree.scss';
require('bootstrap')

class FoldThree extends Component {
  render() {
    return (
      <div className="FoldThree" id="FoldThree">
      <div className="content">
        <div className="anchor3"></div>
        <h3><b>Download CV</b></h3>
        <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
      </div>
    </div>
    );
  }
}

export default FoldThree;
