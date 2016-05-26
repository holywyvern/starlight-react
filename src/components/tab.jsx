import React from 'react';

export default class Tab extends React.Component {
 
  constructor(props) {
    super();
  }
  
  makeHeaders() {
    return []; 
  }
  
  makeBodies() {
    return [];
  }
  
  render() {
    let headers = this.makeHeaders();
    let bodies  = this.makeBodies();
    return (
      <div className="tab-container">
        <ul className="header">
          {headers}
        </ul>
        <div class="body">
          {bodies}
        </div>
      </div>
    );
  }  
  
}