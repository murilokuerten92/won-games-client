import { gql } from '@apollo/client'

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      data {
        attributes {
          url
        }
      }
    }
    title
    subTitle
    button {
      label
      link
    }
    ribbon {
      text
      color
      size
    }
  }
`
