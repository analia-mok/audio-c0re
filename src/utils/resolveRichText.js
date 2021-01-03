import React from 'react';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p>{children}</p>

export const defaultRichTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    // TODO: Adjust or remove later.
    // [BLOCKS.EMBEDDED_ASSET]: node => {
    //   return (
    //     <>
    //       <pre>
    //         <code>{JSON.stringify(node, null, 2)}</code>
    //       </pre>
    //     </>
    //   )
    // },
    // [BLOCKS.EMBEDDED_ENTRY]: node => {
    //   console.log(node);
    //   return (
    //     <>
    //       Testing
    //     </>
    //   )
    // }
  },
}

/**
 * Helper method for resolving Contentful Rich Text fields.
 *
 * @see https://www.gatsbyjs.com/plugins/gatsby-source-contentful/?=content#rendering
 */
export default function resolveRichText(richTextField) {
  return renderRichText(richTextField, defaultRichTextOptions);
}
