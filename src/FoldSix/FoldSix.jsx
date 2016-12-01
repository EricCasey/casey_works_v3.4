import React, { Component } from 'react';
import './FoldSix.scss';

class FoldSix extends Component {
  render() {
    return (
      <div className="FoldSix" id="FoldSix" onClick={this.props.modeChanger} >
      <h3>Check out my photo-blog</h3>
      </div>
    );
  }
}

export default FoldSix;
