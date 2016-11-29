import React, { Component } from 'react';
import './FoldFive.scss';

class FoldFive extends Component {
  render() {
    return (
      <div className="FoldFive" id="FoldFive">
      <div className="content">
        <div className="anchor5"></div>
        {/* <h3>Connect</h3> */}

        <div id="connections1">
          <div className="connection" id="GitHub">
            <a href="https://github.com/EricCasey">
              <img src="http://i.imgur.com/WeeNM8F.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="Linkedin">
            <a href="https://ca.linkedin.com/in/ericsebastiancasey">
              <img src="http://i.imgur.com/oDMwYCE.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="Reddit">
            <a href="https://www.reddit.com/user/Casey_works/">
              <img src="http://i.imgur.com/WmvXBu9.png" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="twitch">
            <a href="https://www.twitch.tv/casey_works" role="presentation">
              <img src="" role="presentation"/>
            </a>
          </div>
        </div>

        <div id="connections2">
          <div className="connection">
            <a href="">
              <img src="" role="presentation"/>
            </a>
          </div>

          <div className="connection">
            <a href="">
              <img src="" role="presentation"/>
            </a>
          </div>

          <div className="connection">
            <a href="">
              <img src="" role="presentation"/>
            </a>
          </div>

          <div className="connection" id="email">
            <a href="">
              <img src="" role="presentation"/>
            </a>
          </div>
        </div>

      </div>
      </div>
    );
  }
}

export default FoldFive;
