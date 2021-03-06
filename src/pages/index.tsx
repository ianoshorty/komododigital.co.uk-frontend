import React from 'react';
import { graphql } from 'gatsby';
import Index from '../templates/index';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const rootNode = findNode('index/index', props);
  const services = findNodes('group', props, 'services');
  const caseStudies = findNodes('group', props, 'case-studies');
  const caseStudiesIntro = findNode('case-studies/index', props);
  const aboutUsIntro = findNode('index/about_us', props);
  const approachIntro = findNode('index/approach', props);
  const clientPortfoliosIntro = findNode('index/client_portfolio', props);
  const insightsIntro = findNode('index/insights', props);
  const contactsIntro = findNode('contacts/index', props);

  const hocProps = {
    services,
    caseStudies,
    subtitle: (rootNode) ? rootNode.subtitle : '',
    title: (rootNode) ? rootNode.title : '',
    intro: (rootNode) ? rootNode.htmlAst : '',
    aboutUsIntro: (aboutUsIntro) ? aboutUsIntro.htmlAst : '',
    approachIntro: (approachIntro) ? approachIntro.htmlAst : '',
    caseStudiesIntro: (caseStudiesIntro) ? caseStudiesIntro.htmlAst : '',
    clientPortfoliosIntro: (clientPortfoliosIntro) ? clientPortfoliosIntro.htmlAst : '',
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    ...props,
  };

  return <Index {...hocProps} />;
};

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|case-studies|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
          }
          fileAbsolutePath
        }
      }
    }
  }
`;
