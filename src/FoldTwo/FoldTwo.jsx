import React, { Component } from 'react';
import './FoldTwo.scss';
// import Face from './face.svg';
import portfolio from '../../portfolio/eric.json';
import devices from './device-set-1.png';

class FoldTwo extends Component {
  render() {
    console.log(portfolio)
    return (
      <div className="FoldTwo" id="FoldTwo">
        <div className="content">
          <div className="anchor2"></div>
          <h3><b>Latest</b></h3>
          {portfolio.map((project, index) => {
            let cssClasses,
                position,
                deskImageHTML,
                mobImageHTML,
                deskImageClasses,
                mobImageClasses = '';
            if (index % 2) {
              position = 'right';
            } else {
              position = 'left';
            }
            cssClasses = `project ${position}`
            if (project.deskImage || project.mobImage || project.tabletImage) {
              deskImageClasses = "projectImages desktopImage";
              mobImageClasses = "projectImages mobileImage";
              deskImageHTML = (
                <img className={deskImageClasses} src={project.deskImage} role="presentation" />
              );
              mobImageHTML = (
                  <img className={mobImageClasses} src={project.mobImage} role="presentation" />
              )
            }
            return (
              <div
              key={index}
              className={cssClasses}
              id={"project" + index}>
                <div className="preview">
                  <img src={devices} className="devices" role="presentation"/>
                  {deskImageHTML}
                  {mobImageHTML}
                </div>
                <h3>{project.title}</h3>
                <br/>
                <br/>
                <p>{project.description}</p>
              </div>
            )
          })
        }
        <h3 id="more">More</h3>
        </div>
      </div>
    );
  }
}

export default FoldTwo;
