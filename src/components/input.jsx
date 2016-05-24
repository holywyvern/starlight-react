import React        from 'react';
import { uniqueID } from '../utils';

export default class Input extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  renderTextArea(id) {
    return (
      <textarea id={id} name={this.props.name}>{this.props.value}</textarea>
    );
  }
  
  renderCheckbox(id) {
    
  }
  
  renderRadio(id) {
    
  }
  
  renderSelect(id) {
    return (
      <select>
        {this.props.children}
      </select>
    );
  }
  
  renderSubmit(id) {
    
  }
  
  renderReset(id) {
    
  }
  
  renderDefault(id) {
    return (
      <input type= {this.props.type} id={id} name={this.props.name} value={this.value} />
    );
  }
  
  
  render() {
    let id = this.props.id || this.props.name || uniqueId();
    switch (this.props.type) {
      case 'textarea':
        return this.renderTextArea(id);
      case 'checkbox':
        return this.renderCheckbox(id);
      case 'radio':
        return this.renderRadio(id);        
      case 'select':
        return this.renderSelect(id);
      case 'submit':
        return this.renderSubmit(id);
      case 'reset':
        return this.renderReset(id);
      default: break;
    }
    return this.renderDefault(id);
  }
  
}

export class InputGroup extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
}

Input.Group = InputGroup;