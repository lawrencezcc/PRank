import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#app'));
