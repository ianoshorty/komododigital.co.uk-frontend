import React from 'react';
import Contact from '../../src/templates/contact';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Contact template is rendered', () => {

  const htmlAst = {
    type: 'element',
    tagName: 'span',
    properties: {},
    children: [
      {
        type: 'text',
        value: 'Lorem Ipsum is the industry standard typesetting text',
      },
    ],
  };

  const hocProps = {
    contactsIntro: htmlAst,
    data: {
      site: GatsbyData,
    },
  };

  const component = renderer.create(<Contact {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
