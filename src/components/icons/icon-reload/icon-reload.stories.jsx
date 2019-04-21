import React from 'react';

import { storiesOf } from '@storybook/react';

import IconReload from './icon-reload';

const holderStyles = {
  width: '64px'
};

storiesOf('UI|Icons/IconReload', module).add('Default', () => {
  return (
    <div style={holderStyles}>
      <IconReload />
    </div>
  );
});
