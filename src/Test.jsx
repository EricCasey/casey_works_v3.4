// src/components/About/index.js
import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';


export default class Test extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Test', className)} {...props}>
        <h1>
          "2-0PcJAEN4_dINjb-WMjv_L3EgSyO4AYxobFkZFnbts.fEFd7HcqekFNdT_M3-QYnFGRdl6nRWjwIqAPppaIfUs"
        </h1>
      </div>
    );
  }
}
