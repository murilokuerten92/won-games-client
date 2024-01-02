import { QueryGames_games_data } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners_data,
  QueryHome_sections_data_attributes_upcomingGames_highlight
} from 'graphql/generated/QueryHome'

import { bannerMapper, cartMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      attributes: {
        image: {
          data: {
            attributes: {
              url: '/image.jpg'
            }
          }
        },
        title: 'Banner title',
        subTitle: 'Banner subtitle',
        button: {
          label: 'button label',
          link: 'button link'
        },
        ribbon: {
          text: 'ribbon text',
          color: 'primary',
          size: 'small'
        }
      }
    } as QueryHome_banners_data

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game = {
      attributes: {
        name: 'game',
        developers: {
          data: [
            {
              attributes: {
                name: 'developer'
              }
            }
          ]
        },
        slug: 'game',
        cover: {
          data: {
            attributes: {
              url: '/image.jpg'
            }
          }
        },
        price: 10
      }
    } as QueryGames_games_data

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1337/image.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should return mapped highlight', () => {
    const highlight = {
      title: 'title',
      subtitle: 'subtitle',
      background: {
        data: {
          attributes: {
            url: '/image.jpg'
          }
        }
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: {
        data: {
          attributes: {
            url: '/image.jpg'
          }
        }
      }
    } as QueryHome_sections_data_attributes_upcomingGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'title',
      subtitle: 'subtitle',
      backgroundImage: 'http://localhost:1337/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'right',
      floatImage: 'http://localhost:1337/image.jpg'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty array if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return mapped items', () => {
    const game = {
      attributes: {
        slug: '1',
        cover: {
          data: {
            attributes: {
              url: '/image.jpg'
            }
          }
        },
        name: 'game',
        price: 10
      }
    } as QueryGames_games_data

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/image.jpg',
        title: 'game',
        price: '$10.00'
      }
    ])
  })
})
