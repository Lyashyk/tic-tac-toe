import React, { Component } from 'react';

import './play-grid.css';

import Button from './button/button';

const INDEXMUS = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8
};

class PlayGrid extends Component {
  render() {
    const { onClick, cellList } = this.props;

    return (
      <div className="PlayGrid">
        <div className="PlayGrid-row">
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.ZERO}
              onClick={onClick}
              icon={cellList[0]}
            />
          </div>
          <div className="PlayGrid-cell">
            <Button index={INDEXMUS.ONE} onClick={onClick} icon={cellList[1]} />
          </div>
          <div className="PlayGrid-cell">
            <Button index={INDEXMUS.TWO} onClick={onClick} icon={cellList[2]} />
          </div>
        </div>

        <div className="PlayGrid-row">
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.THREE}
              onClick={onClick}
              icon={cellList[3]}
            />
          </div>
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.FOUR}
              onClick={onClick}
              icon={cellList[4]}
            />
          </div>
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.FIVE}
              onClick={onClick}
              icon={cellList[5]}
            />
          </div>
        </div>

        <div className="PlayGrid-row">
          <div className="PlayGrid-cell">
            <Button index={INDEXMUS.SIX} onClick={onClick} icon={cellList[6]} />
          </div>
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.SEVEN}
              onClick={onClick}
              icon={cellList[7]}
            />
          </div>
          <div className="PlayGrid-cell">
            <Button
              index={INDEXMUS.EIGHT}
              onClick={onClick}
              icon={cellList[8]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayGrid;
