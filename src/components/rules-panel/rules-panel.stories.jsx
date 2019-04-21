import React from 'react';

import { storiesOf } from '@storybook/react';

import RulesPanel from './rules-panel';

storiesOf('core|components/RulesPanel', module).add('Default', () => {
  return (
    <div
      style={{
        border: '1px solid #000',
        borderRadius: '20px',
        position: 'relative'
      }}
    >
      <RulesPanel isOpen={true} />
    </div>
  );
});
