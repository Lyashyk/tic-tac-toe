import React, { Component } from 'react';
import cn from 'classnames';

import './player-panel.css';

class PlayerPanel extends Component {
  render() {
    const { icon, title, isActive } = this.props;

    return (
      <div
        className={cn('PlayerPanel', {
          'PlayerPanel--active': isActive
        })}
      >
        <h1 className="PlayerPanel-title">{title}</h1>
        <div className="PlayerPanel-separator" />
        <span className="PlayerPanel-icon">{icon}</span>
      </div>
    );
  }
}

export default PlayerPanel;
