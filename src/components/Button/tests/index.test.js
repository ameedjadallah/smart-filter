/**
 * Testing our link component
 */

import React from 'react';
import { render } from 'react-testing-library';

import Button from '../index';

const text = 'Test';
const renderComponent = (props = {}) =>
  render(
    <Button text={text} {...props} />,
  );

describe('<Button />', () => {
  it('should render a <button> tag', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a text attribute', () => {
    const { container } = renderComponent();
    expect(container.querySelector('button').text).toEqual(text);
  });

  it('should have a class attribute', () => {
    const className = 'test';
    const { container } = renderComponent({ className });
    expect(container.querySelector('button').classList).toContain(className);
  });
});
