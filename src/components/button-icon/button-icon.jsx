import React, { Component } from 'react';
import cn from 'classnames';

import './button-icon.css';

class ButtonIcon extends Component {
  static defaultProps = {
    size: 'normal'
  };

  render() {
    const { icon, size, onClick } = this.props;

    return (
      <button
        className={cn('ButtonIcon', `ButtonIcon--size-${size}`)}
        onClick={onClick}
      >
        <span className="ButtonIcon-holder">{icon}</span>
      </button>
    );
  }
}

export default ButtonIcon;
