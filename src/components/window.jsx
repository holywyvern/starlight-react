import React from 'react';

export default class Window extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    let minButton   = (this.props.onMinimize) ? 
                       <button key="min-btn"><i className="fa fa-fw fa-minus fa-fw" onClick={this.props.onMinimize} /></button>
                    : <span key="min-span" />;
    let maxButton   = (this.props.onMaximize) ? 
                       <button key="max-btn"><i className={ `fa fa-fw fa-${this.props.maximized ? 'clone' : 'square-o'} fa-flip-horizontal fa-fw` } onClick={this.props.onMaximize}  /></button>
                    : <span key="max-span" />;
    let closeButton = (this.props.onClose) ? 
                       <button key="close-btn" className="danger"><i className="fa fa-fw fa-times fa-fw" onClick={this.props.onClose} /></button>
                    : <span key="close-span" />;                                  
    return (
      <div className="window">
        {[ 
          <header key="header">
            {[ 
              <div className="top" key="header-top">
                {[ 
                  <h1 key="title">{this.props.title}</h1>,
                  <div className="button-group" key="buttons">
                    {[
                      minButton,
                      maxButton,
                      closeButton
                    ]}                
                  </div> 
                ]}
              </div>,
              this.props.menu ? this.props.menu : <span key="menu" />
            ]}
          </header>, 
          <div className="content" key="content">
            {this.props.children}
          </div>,  
          <footer key="footer">
            { this.props.footer }
          </footer>
        ]}
      </div>
    );

  }
  
}

Window.propTypes = {
  title:      React.PropTypes.string.isRequired,
  onMinimize: React.PropTypes.func,
  onMaximize: React.PropTypes.func,
  onClose:    React.PropTypes.func,
  footer:     React.PropTypes.arrayOf(React.PropTypes.element),
  menu:       React.PropTypes.element,
  maximized:  React.PropTypes.bool
};

Window.defaultProps = {
  title:      '',
  onMinimize: null,
  onMaximize: null,
  onClose:    null,
  footer:     [],
  menu:       null ,
  maximized:  false
};