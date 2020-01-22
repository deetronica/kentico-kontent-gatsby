import { graphql } from "gatsby"

export const KontentItemBriefingsFragmentSlim = graphql`
  fragment KontentItemBriefingsFragmentSlim on KontentItemBriefings {
    system {
      codename
      type
    }
    elements {
      body_copy {
        value
        resolvedData {
          html
        }
        images {
          imageId
          description
          url
        }
        links {
          codename
          linkId
          type
          urlSlug
        }
      }
      briefing_image {
        value {
          url
          description
        }
      }
      briefing_name {
        value
      }
      headline__h1_ {
        value
      }
      short_desc_ {
        value
      }
      untitled_url_slug {
        value
      }
    }
  }
`;
