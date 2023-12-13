import { QueryGames_games_data } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners_data,
  QueryHome_sections_data_attributes_upcomingGames_highlight
} from 'graphql/generated/QueryHome'

export const bannerMapper = (banners: QueryHome_banners_data[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.attributes.image.data?.attributes?.url}`,
    title: banner.attributes.title,
    subtitle: banner.attributes.subTitle,
    ...(banner.attributes.button && {
      buttonLabel: banner.attributes.button?.label,
      buttonLink: banner.attributes.button?.link
    }),
    ...(banner.attributes.ribbon && {
      ribbon: banner.attributes.ribbon?.text,
      ribbonColor: banner.attributes.ribbon?.color,
      ribbonSize: banner.attributes.ribbon?.size
    })
  }))
}

export const gamesMapper = (
  games: QueryGames_games_data[] | null | undefined
) => {
  return (
    games &&
    games.map((game) => ({
      title: game.attributes.name,
      slug: game.attributes.slug,
      developer: game.attributes.developers.data[0].attributes.name,
      img: `http://localhost:1337/${game.attributes.cover?.data?.attributes.url}`,
      price: game.attributes.price
    }))
  )
}

export const highlightMapper = (
  highlight:
    | QueryHome_sections_data_attributes_upcomingGames_highlight
    | null
    | undefined
) => {
  return (
    highlight && {
      title: highlight.title,
      subtitle: highlight?.subtitle,
      backgroundImage: `http://localhost:1337/${highlight?.background?.data?.attributes?.url}`,
      floatImage: `http://localhost:1337/${highlight.floatImage?.data?.attributes?.url}`,
      buttonLabel: highlight.buttonLabel,
      buttonLink: highlight.buttonLink,
      alignment: highlight.alignment
    }
  )
}
