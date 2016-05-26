import React                      from 'react';
import { uniqueId, shallowClone } from '../utils';

export const TYPES_WITH_LABEL = [
  'radio', 'checkbox', 'submit', 'reset'
];

function onChange(e) {
  switch (this.props.type) {
    case 'radio':
    case 'checkbox':
      this.setState({ checked: e.target.checked });
      break;
    default:
      this.setState({ value: e.target.value });
      break;
  }
}

export default class Input extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      value: props.value,
      disabled: props.disabled,
      id: props.id || uniqueId()
    }; 
    this.onChange = props.onChange || onChange.bind(this);
  }
  
  renderTextarea(id, props) {
    props.id = id;
    props.value = props.value || this.state.value;
    if (!props.onChange) {
      props.onChange = this.onChange;
    }    
    return (
      <textarea {...props} />
    );
  }  
  
  renderSelect(id, props) {
    props.id = id; 
    return (
      <select {...props}>
        {this.props.children}
      </select>
    );
  }
  
  renderDefault(id, props) {
    props.id = id;
    props.value = this.state.value;
    delete props.checked;
    return (
      <input {...props} />
    );
  }

  renderRadio(id, props) {
    props.id = id;
    props.checked = this.state.checked;
    props.onChange = this.onChange;  
    return (
      <div className="radio">
        <input {...props} />
        <label htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
  
  renderCheckbox(id, props) {
    props.id = id;
    props.checked = this.state.checked;
    props.onChange = this.onChange;    
    return (
      <div className="checkbox">
        <input {...props} />
        <label htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
  
  renderSet(id, props) {
    return <div className="control">{this.props.children}</div>;
  }
  
  render() {
    let id = this.state.id;
    let props = shallowClone(this.props);
    delete props.children;
    delete props.label;
    switch (props.type || 'text') {
      case 'textarea':
        return this.renderTextarea(id, props);
      case 'select':
        return this.renderSelect(id, props);
      case 'radio':
        return this.renderRadio(id, props); 
      case 'checkbox':
        return this.renderCheckbox(id, props);
      case 'set':
        return this.renderSet(id, props);
      default:
        return this.renderDefault(id, props);
    }
  }
  
}

export class InputGroup extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checked:  props.checked,
      value:    props.value,
      disabled: props.disabled
    };    
    this.onChange = onChange.bind(this);
  }
  
  componentWillReceiveProps(props) {
    let id = typeof props.id != 'undefined' ? props.id : this.state.id;
    let checked = props.checked || this.state.checked;
    let value = props.value || this.state.value;
    this.setState({ id, checked, value });
  }  
  
  makeInput(id, props) {
    props.id = id;
    props.onChange = this.onChange;
    props.checked = this.state.checked;
    props.value = this.state.value;        
    switch (props.type) {
      case 'checkbox':
      case 'radio':     
        return <Input {...props}  />;
      default:

        return <div className="control"><Input {...props} /></div>;
    }
  }
  
  hasOwnLabel() {
    return TYPES_WITH_LABEL.indexOf(this.props.type) !== -1;
  }
  
  renderWithoutLabel(id, props) {
    return (
      <div className="group">
        <div className="control"></div>
        { this.makeInput(id, props) }
      </div>
    );    
  }
  
  renderWithLabel(id, props) {
    delete props.label;
    return (
      <div className="group">
        <label htmlFor={id}>{this.props.label}</label>
        { this.makeInput(id, props) }
      </div>
    );
  }
  
  render() {
    let id = this.props.id || uniqueId();
    let props = shallowClone(this.props);
    return this.hasOwnLabel() ?  this.renderWithoutLabel(id, props) : this.renderWithLabel(id, props);
  }
  
}

Input.Group = InputGroup;