import React from 'react';
import { graphql } from 'gatsby';
import resolveRichText from '../utils/resolveRichText';

export default function ContentfulBasicPage({ data }) {
  const page = data.basicPage;
  const bodyField = page.body;

  return (
    <article>
      <h1>{page.title}</h1>
      <div>
        {bodyField && resolveRichText(bodyField)}
      </div>
    </article>
  );
}

export const query = graphql`
  query($id: String) {
    basicPage: contentfulBasicPage(id: { eq: $id }) {
      title
      body {
        raw
      }
    }
  }
`;
