import React from 'react';
import { graphql } from 'gatsby';

export default function ContentfulLocation({ data }) {
  const location = data.location;

  return (
    <article>
      <h1>{location.name}</h1>
    </article>
  );
}

export const query = graphql`
  query($id: String) {
    location: contentfulLocation(id: { eq: $id }) {
      name
    }
  }
`;
