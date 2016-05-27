import React from 'react';

export default class Tab extends React.Component {
 
  constructor(props) {
    super();
    this.state = { index: props.selected || 0 };
    this.selectItem = this.selectItem.bind(this);
  }
  
  selectItem(e) {
    let index = Number(e.target.getAttribute('data-tab-index'));
    let child = this.children[index];
    if (!child.props.disabled) {
      this.setState({ index });
    }
  }
  
  componentWillReceiveProps(props) {
    let selected = typeof props.selected != 'undefined' ? props.selected : this.state.selected;
    this.setState({ selected });
  }      
  
  get children() {
    return this.props.children instanceof Array ? this.props.children : [ this.props.children ];
  }
  
  makeHeaders() {
    let result = [];
    let children = this.children;
    for (let i = 0, length = children.length; i < length; ++i) {
      let className = [];
      if (i === this.state.index) className.push('active');
      if (children[i].props.disabled) className.push('disabled');
      result.push(
        <li className={className.join(' ')} key={i}>
          <a href="#" onClick={this.selectItem} data-tab-index={i}>{[ children[i].props.title ]}</a>
        </li>
      );
    }
    return result; 
  }
  
  makeBodies() {
    let result = [];
    let children = this.children;   
    for (let i = 0, length = children.length; i < length; ++i) {
      let className = [];
      if (i === this.state.index) className.push('active');
      if (children[i].props.disabled) className.push('disabled');
      result.push(
        <div className={className.join(' ')} key={i} data-tab-index={i}>
          {children[i]}
        </div>
      );
    }    
    return result; 
  }
  
  render() {
    let headers = this.makeHeaders();
    let bodies  = this.makeBodies();
    return (
      <div className="tab-container">
        <ul className="header">
          {headers}
        </ul>
        <div className="body">
          {bodies}
        </div>
      </div>
    );
  }  
  
}

export class TabPage extends React.Component {
  
  constructor(props) {
    super();
  }
  
  render() {
    return <div>{this.props.children}</div>;
  }
  
}

TabPage.defaultProps = {
  title: ''
};

Tab.Page = TabPage;
