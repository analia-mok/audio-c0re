import React from 'react';
import { graphql } from 'gatsby';
import resolveRichText from '../utils/resolveRichText';

export default function Homepage({ data }) {
  const page = data.page;
  const body = page.body;

  return (
    <div>
      <h1>{page.title}</h1>
      <div>{body && resolveRichText(body)}</div>
    </div>
  );
}

export const query = graphql`
  query {
    page: contentfulBasicPage(slug: {eq: "homepage"}) {
      title
      body {
        raw
      }
    }
  }
`;
