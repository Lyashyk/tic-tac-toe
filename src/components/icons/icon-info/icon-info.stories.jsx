import React from 'react';

import { storiesOf } from '@storybook/react';

import IconInfo from './icon-info';

const holderStyles = {
  width: '64px'
};

storiesOf('UI|Icons/IconInfo', module).add('Default', () => {
  return (
    <div style={holderStyles}>
      <IconInfo />
    </div>
  );
});
