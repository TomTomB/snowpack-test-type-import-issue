import React, { FC } from 'react';
import { Bar } from '../Bar';
import type { FooProps } from './Foo.types';

export const Foo: FC<FooProps> = () => {
  return (
    <div>
      <h1>Foo</h1>
      <Bar />
    </div>
  );
};
