import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { Foo } from './Foo';

describe('Foo', () => {
  it('should render', () => {
    expect(render(<Foo />));
  });
});
