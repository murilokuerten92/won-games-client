import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'Sample Game',
              slug: 'sample-game',
              price: 518.39,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: {
        data: [
          {
            attributes: {
              name: 'Fetch More Game',
              slug: 'fetch-more',
              price: 518.39,
              __typename: 'Game'
            }
          }
        ]
      }
    }
  }
}
