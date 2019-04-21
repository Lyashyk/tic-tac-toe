import React, { Component } from 'react';

import IconCircle from '../../icons/icon-circle/icon-circle';
import IconCross from '../../icons/icon-cross/icon-cross';

import './button.css';

const ICONS = {
  CIRCLE: <IconCircle />,
  CROSS: <IconCross />
};

class Button extends Component {
  render() {
    const { icon } = this.props;
    const isDisabled = !!icon;

    return (
      <button
        className="PlayGrid_Button"
        onClick={this.handleClick}
        disabled={isDisabled}
      >
        {icon && <span className="PlayGrid_Button-icon">{ICONS[icon]}</span>}
      </button>
    );
  }

  handleClick = () => {
    const { index, onClick } = this.props;

    onClick(index);
  };
}

export default Button;
