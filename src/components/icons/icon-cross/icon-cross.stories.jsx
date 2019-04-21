import React from 'react';

import { storiesOf } from '@storybook/react';

import IconCross from './icon-cross';

const holderStyles = {
  width: '64px'
};

storiesOf('UI|Icons/IconCross', module).add('Default', () => (
  <div style={holderStyles}>
    <IconCross />
  </div>
));
