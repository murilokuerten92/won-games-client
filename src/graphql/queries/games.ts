import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        attributes {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
`

export const QUERY_GAMES_BY_SLUG = gql`
  query QueryGamesBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          rating
          release_date
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
          price
        }
      }
    }
  }
`
