import React from 'react';

export default class Menu extends React.Component {
  
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <nav className="menu" role="menu">
        <ul>
          { this.props.children }
        </ul>
      </nav>
    );
  }  
  
}

export class MenuItem extends React.Component {
  
  constructor(props) {
    super();
  }
  
  render() {
    let header, dropdown;
    let title = <span key="title">{this.props.title}</span>;
    if (this.props.children && this.props.children.length) {
      header = [title, ' ', <span className="caret" key="real-caret" />];
      dropdown = (
        <ul key="real-dropdown" className={ this.props.disabled ? 'disabled' : this.props.active ? 'active' : '' }>
          {this.props.children}
        </ul>
      );      
    } else {
      header = title;
      dropdown = <span key="dropdown" />;
    }
    return (
      <li>
        {[
          <a href="#" onClick={this.onClick} key="link">
             { header }
          </a>,
          dropdown
        ]}
      </li>
    );
  }
  
}

export class MenuSeparator extends React.Component {
  
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <li><span className="divider"></span></li>
    );
  }
  
}

Menu.Separator = MenuSeparator;
Menu.Item = MenuItem;