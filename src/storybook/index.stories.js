import React from 'react';
import { storiesOf } from '@storybook/react';

import FaceBook from '../components/FaceBook';

storiesOf('FaceBook', module)
  .add(
    'default',
    () => (
      <FaceBook
          title="Tây Tiến 111"
          desc="Tác phẩm Tây Tiến"
          imageURL="https://res.cloudinary.com/nnhungcoderx/image/upload/v1591289041/kmfgbgrpvxc4xiuwcdlc.jpg"
      />
    )
  );