import React from 'react';

import { storiesOf } from '@storybook/react';

import PlayerPanel from './player-panel';
import IconCross from '../icons/icon-cross/icon-cross';

const TITLE = 'PLAYER 1';

storiesOf('core|components/PlayerPanel', module).add('Default', () => {
  return (
    <div style={{ width: '200px' }}>
      <PlayerPanel title={TITLE} icon={<IconCross />} />
    </div>
  );
});
