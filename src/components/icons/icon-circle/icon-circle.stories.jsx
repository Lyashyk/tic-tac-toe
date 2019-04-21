import React from 'react';

import { storiesOf } from '@storybook/react';

import IconCircle from './icon-circle';

const holderStyle = {
  width: '64px'
};

storiesOf('UI|Icons/IconCirle', module).add('Default', () => {
  return (
    <div style={holderStyle}>
      <IconCircle />
    </div>
  );
});
