import React from 'react';

import SummaryPanel from './summary-panel';

import { storiesOf } from '@storybook/react';

storiesOf('core|components/SummaryPanel', module).add('Default', () => {
  return (
    <div
      style={{
        border: '1px solid #000',
        borderRadius: '20px',
        position: 'relative'
      }}
    >
      <SummaryPanel isOpen={true} currentPlayer={'PLAYER_1'} />
    </div>
  );
});
