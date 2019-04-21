import React, { Component } from 'react';

import './button.css';

class Button extends Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <button className="Button" onClick={onClick}>
        {title}
      </button>
    );
  }
}

export default Button;
