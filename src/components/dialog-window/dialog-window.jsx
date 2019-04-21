import React, { Component } from 'react';
import cn from 'classnames';

import IconButtom from '../button-icon/button-icon';
import IconCross from '../icons/icon-cross/icon-cross';

import './dialog-window.css';

class DialogWindow extends Component {
  render() {
    const { isOpen, onClick } = this.props;
    return (
      <div
        className={cn('DialogWindow', {
          'DialogWindow--visible': isOpen
        })}
      >
        <div className="DialogWindow-container" ref={this.setContainerRef}>
          <div className="DialogWindow-content">
            {this.props.children}

            <div className="DialogWindow-iconButtom">
              <IconButtom
                size={'small'}
                icon={<IconCross />}
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  setContainerRef = element => {
    this.container = element;
  };

  handleWindowClick = e => {
    const { target } = e;

    if (target === this.container) {
      this.props.onClick();
    }
  };
}

export default DialogWindow;
