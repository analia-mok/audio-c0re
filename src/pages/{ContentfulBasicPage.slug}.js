import React from 'react';
import { graphql } from 'gatsby';

export default function ContentfulBasicPage({ data }) {
  const page = data.basicPage;
  const bodyContent = JSON.parse(page.body.raw);
  console.log(bodyContent.content);

  return (
    <article>
      <h1>Hi I'm a page</h1>
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
