import React from 'react';

import { storiesOf } from '@storybook/react';

import DialogWindow from './dialog-window';

storiesOf('Core|components/DialogWindow', module).add('Default', () => {
  return (
    <div style={{ height: '600px', width: '600px', position: 'relative' }}>
      <DialogWindow>
        <div
          style={{ height: '200px', width: '200px', backgroundColor: '#fff' }}
        />
      </DialogWindow>
    </div>
  );
});
