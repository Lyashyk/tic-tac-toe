import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import ButtonIcon from './button-icon';
import IconReload from '../icons/icon-reload/icon-reload';

const sizes = {
  Default: 'default',
  Small: 'small'
};

storiesOf('UI|ButtonIcon', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const size = select('Size', sizes, 'default');

    return <ButtonIcon size={size} icon={<IconReload />} />;
  });
