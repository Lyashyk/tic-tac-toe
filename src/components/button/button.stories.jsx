import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './button';

storiesOf('core|components/Button', module).add('Default', () => {
  return <Button />;
});
