import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import createComponent from 'react-unit';
import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
const test = addAssertions(tape, {jsxEquals});

// Component to test
import MakeAccount from '../components/makeAccount';

test('----- React Component Tests: makeAccount -----', (t) => {

  // Shallow rendering: Render React element only *one* level deep
  const component = createComponent.shallow(<MakeAccount />);

  // Test component props and content
  //t.equal(component.props.className, 'default-class', 'ClassName props of component should equal "share"');
  t.equal(component.text, 'Hello!', 'Label props of component should be rendered as <H1> text "Hello!"');

  // Test rendered output
  const renderer = createRenderer();
  renderer.render(<MakeAccount />);
  const result = renderer.getRenderOutput();
  t.jsxEquals(result, <h1>Hello!</h1>);

  t.end();
});