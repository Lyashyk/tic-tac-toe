import React, { Component } from 'react';

import './summary-panel.css';

import DialogWindow from '../dialog-window/dialog-window';
import Button from '../button/button';

class SummaryPanel extends Component {
  render() {
    const { currentPlayer, onClick, isOpen } = this.props;
    return (
      <DialogWindow isOpen={isOpen} onClick={onClick}>
        <div className="SummaryPanel">
          <h3 className="RulesPanel-title">
            Поздравляем {currentPlayer} с победой!
          </h3>
          <div className="RulesPanel-buttonReset">
            <Button onClick={this.handleClick} title={'Начать заново'} />
          </div>
        </div>
      </DialogWindow>
    );
  }
  handleClick = () => {
    const { onClick, functionReset } = this.props;
    onClick();
    functionReset();
  };
}

export default SummaryPanel;
