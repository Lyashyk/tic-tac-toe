import React, { Component } from 'react';

import PlayGridApp from '../components/play-grid-app/play-grid-app';

const PLAYER = {
  FIRST: 'PLAYER_FIRST',
  SECOND: 'PLAYER_SECOND'
};

const ICONS = {
  PLAYER_FIRST: 'CROSS',
  PLAYER_SECOND: 'CIRCLE'
};

const INITIAL_CELL_LIST = ['', '', '', '', '', '', '', '', ''];

const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class PlayGridContainer extends Component {
  state = {
    player: PLAYER.FIRST,
    cellList: INITIAL_CELL_LIST,
    isOpenInfo: false,
    isWin: false
  };

  render() {
    const { cellList, player, isOpenInfo, isWin } = this.state;
    return (
      <PlayGridApp
        onClick={this.handleClick}
        cellList={cellList}
        player={player}
        functionReset={this.resetResult}
        isOpenInfo={isOpenInfo}
        changeInfoFunction={this.changeInfoFunction}
        isWin={isWin}
        determWinFunction={this.determWinFunction}
      />
    );
  }

  getIcon(player) {
    return ICONS[player];
  }

  setIcon(index) {
    const { cellList, player } = this.state;

    const newList = [...cellList];

    const icon = this.getIcon(player);

    newList[index] = icon;
    this.setState({ cellList: newList });
  }

  checkWinConditions() {
    const { cellList, player } = this.state;

    const icon = this.getIcon(player);

    let iconIndexList = [];

    for (let i in cellList) {
      if (cellList[i] === icon) {
        iconIndexList = [...iconIndexList, +i];
      }
    }

    if (iconIndexList.length < 3) {
      this.swapPlayer();
      return;
    }

    for (let i in WIN_COMBINATIONS) {
      const winCombination = WIN_COMBINATIONS[i];

      let counter = 0;
      for (let k in winCombination) {
        const index = winCombination[k];

        if (iconIndexList.indexOf(index) === -1) break;

        counter++;
      }

      if (counter === 3) {
        this.determWinFunction();
        console.log(this.state.isWin);
        return;
      }
    }

    this.swapPlayer();
  }

  swapPlayer() {
    this.setState(state => {
      const player =
        state.player === PLAYER.FIRST ? PLAYER.SECOND : PLAYER.FIRST;

      return { player };
    });
  }

  handleClick = index => {
    this.setIcon(index);

    const promise = new Promise(resolve => {
      this.setIcon(index);
      resolve();
    });

    promise.then(() => this.checkWinConditions());
  };

  resetResult = () => {
    this.setState({ cellList: INITIAL_CELL_LIST, player: PLAYER.FIRST });
  };

  changeInfoFunction = () => {
    const { isOpenInfo } = this.state;
    const newIsOpenInfo = !isOpenInfo;
    this.setState({ isOpenInfo: newIsOpenInfo });
  };

  determWinFunction = () => {
    const { isWin } = this.state;
    const newIsWin = !isWin;
    this.setState({ isWin: newIsWin });
  };
}

export default PlayGridContainer;
