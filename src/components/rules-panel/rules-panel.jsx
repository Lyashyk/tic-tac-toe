import React, { Component } from 'react';

import DialogWindow from '../dialog-window/dialog-window';

import './rules-panel.css';

class RulesPanel extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <DialogWindow {...rest}>
        <div className="RulesPanel">
          <h3 className="RulesPanel-title">Правила игры</h3>
          <ol className="RulesPanel-content">
            <li>Первым всегда начинает ход Player 1.</li>
            <li>
              Игроки по очереди ставят на свободные клетки поля 3х3 знаки (один
              всегда крестики, другой всегда нолики).
            </li>
            <li>
              Первый, выстроивший в ряд 3 своих фигур по вертикали, горизонтали
              или диагонали, выигрывает.
            </li>
          </ol>
        </div>
      </DialogWindow>
    );
  }
}

export default RulesPanel;
