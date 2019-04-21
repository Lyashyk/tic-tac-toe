import React, { Component } from 'react';

import PlayGrid from '../play-grid/play-grid';
import PlayerPanel from '../player-panel/player-panel';
import IconCross from '../icons/icon-cross/icon-cross';
import IconCircle from '../icons/icon-circle/icon-circle';
import IconReload from '../icons/icon-reload/icon-reload';
import IconButton from '../button-icon/button-icon';
import IconInfo from '../icons/icon-info/icon-info';
import RulesPanel from '../rules-panel/rules-panel';
import SummaryPanel from '../summary-panel/summary-panel';

import './play-grid-app.css';

class PlayGridApp extends Component {
  render() {
    const {
      onClick,
      cellList,
      player,
      functionReset,
      isOpenInfo,
      changeInfoFunction,
      isWin,
      determWinFunction
    } = this.props;
    return (
      <section className="PlayGridApp">
        <h1 className="PlayGridApp-title">Tic Tac Toe</h1>
        <div className="PlayGridApp-playerPanel">
          <div className="PlayGridApp-flexWrapper">
            <div className="PlayGridApp-playerPanelItem">
              <PlayerPanel
                title="PLAYER 1"
                icon={<IconCross />}
                isActive={player === 'PLAYER_FIRST'}
              />
            </div>
            <div className="PlayGridApp-playerPanelItem">
              <PlayerPanel
                title="PLAYER 2"
                icon={<IconCircle />}
                isActive={player === 'PLAYER_SECOND'}
              />
            </div>
          </div>
        </div>
        <div className="PlayGridApp-iconButtonPanel">
          <div className="PlayGridApp-iconButtonPanelItem">
            <IconButton icon={<IconInfo />} onClick={changeInfoFunction} />
          </div>
          <div className="PlayGridApp-iconButtonPanelItem">
            <IconButton icon={<IconReload />} onClick={functionReset} />
          </div>
        </div>
        <div className="PlayGridApp-content">
          <PlayGrid onClick={onClick} cellList={cellList} />
        </div>

        <RulesPanel isOpen={isOpenInfo} onClick={changeInfoFunction} />
        <SummaryPanel
          isOpen={isWin}
          currentPlayer={player}
          onClick={determWinFunction}
          functionReset={functionReset}
        />
      </section>
    );
  }
}

export default PlayGridApp;
