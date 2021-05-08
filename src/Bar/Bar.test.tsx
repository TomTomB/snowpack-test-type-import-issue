import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';
import { Bar } from './Bar';

describe('Bar', () => {
  it('should render', () => {
    expect(render(<Bar />));
  });
});
