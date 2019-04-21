import React from 'react';

import { storiesOf } from '@storybook/react';

import PlayGrid from './play-grid';

storiesOf('Core|components/PlayGrid', module).add('Default', () => {
  return <PlayGrid />;
});
