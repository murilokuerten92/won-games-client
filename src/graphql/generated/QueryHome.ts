/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_data_attributes_image_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_data_attributes_image_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_banners_data_attributes_image_data_attributes;
}

export interface QueryHome_banners_data_attributes_image {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_banners_data_attributes_image_data;
}

export interface QueryHome_banners_data_attributes_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_data_attributes_ribbon {
  __typename: "ComponentPageRibbon";
  text: string;
  color: ENUM_COMPONENTPAGERIBBON_COLOR;
  size: ENUM_COMPONENTPAGERIBBON_SIZE;
}

export interface QueryHome_banners_data_attributes {
  __typename: "Banner";
  image: QueryHome_banners_data_attributes_image;
  title: string;
  subTitle: string;
  button: QueryHome_banners_data_attributes_button;
  ribbon: QueryHome_banners_data_attributes_ribbon;
}

export interface QueryHome_banners_data {
  __typename: "BannerEntity";
  attributes: QueryHome_banners_data_attributes;
}

export interface QueryHome_banners {
  __typename: "BannerEntityResponseCollection";
  data: QueryHome_banners_data[];
}

export interface QueryHome_newGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_newGames_data_attributes_cover_data_attributes;
}

export interface QueryHome_newGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_newGames_data_attributes_cover_data;
}

export interface QueryHome_newGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryHome_newGames_data_attributes_developers_data_attributes;
}

export interface QueryHome_newGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryHome_newGames_data_attributes_developers_data[];
}

export interface QueryHome_newGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_newGames_data_attributes_cover;
  developers: QueryHome_newGames_data_attributes_developers;
  price: number;
}

export interface QueryHome_newGames_data {
  __typename: "GameEntity";
  attributes: QueryHome_newGames_data_attributes;
}

export interface QueryHome_newGames {
  __typename: "GameEntityResponseCollection";
  data: QueryHome_newGames_data[];
}

export interface QueryHome_upcomingGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_upcomingGames_data_attributes_cover_data_attributes;
}

export interface QueryHome_upcomingGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_upcomingGames_data_attributes_cover_data;
}

export interface QueryHome_upcomingGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upcomingGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryHome_upcomingGames_data_attributes_developers_data_attributes;
}

export interface QueryHome_upcomingGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryHome_upcomingGames_data_attributes_developers_data[];
}

export interface QueryHome_upcomingGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_upcomingGames_data_attributes_cover;
  developers: QueryHome_upcomingGames_data_attributes_developers;
  price: number;
}

export interface QueryHome_upcomingGames_data {
  __typename: "GameEntity";
  attributes: QueryHome_upcomingGames_data_attributes;
}

export interface QueryHome_upcomingGames {
  __typename: "GameEntityResponseCollection";
  data: QueryHome_upcomingGames_data[];
}

export interface QueryHome_freeGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_freeGames_data_attributes_cover_data_attributes;
}

export interface QueryHome_freeGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_freeGames_data_attributes_cover_data;
}

export interface QueryHome_freeGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryHome_freeGames_data_attributes_developers_data_attributes;
}

export interface QueryHome_freeGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryHome_freeGames_data_attributes_developers_data[];
}

export interface QueryHome_freeGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_freeGames_data_attributes_cover;
  developers: QueryHome_freeGames_data_attributes_developers;
  price: number;
}

export interface QueryHome_freeGames_data {
  __typename: "GameEntity";
  attributes: QueryHome_freeGames_data_attributes;
}

export interface QueryHome_freeGames {
  __typename: "GameEntityResponseCollection";
  data: QueryHome_freeGames_data[];
}

export interface QueryHome_sections_data_attributes_newGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_newGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_newGames_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_newGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newGames_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_newGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_newGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_newGames_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_newGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_newGames_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_newGames_highlight_background;
  floatImage: QueryHome_sections_data_attributes_newGames_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_newGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_newGames_highlight;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularGames_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularGames_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularGames_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularGames_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_popularGames_highlight_background;
  floatImage: QueryHome_sections_data_attributes_popularGames_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover_data;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers_data[];
}

export interface QueryHome_sections_data_attributes_popularGames_games_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryHome_sections_data_attributes_popularGames_games_data_attributes_cover;
  developers: QueryHome_sections_data_attributes_popularGames_games_data_attributes_developers;
  price: number;
}

export interface QueryHome_sections_data_attributes_popularGames_games_data {
  __typename: "GameEntity";
  attributes: QueryHome_sections_data_attributes_popularGames_games_data_attributes;
}

export interface QueryHome_sections_data_attributes_popularGames_games {
  __typename: "GameRelationResponseCollection";
  data: QueryHome_sections_data_attributes_popularGames_games_data[];
}

export interface QueryHome_sections_data_attributes_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_data_attributes_popularGames_highlight;
  games: QueryHome_sections_data_attributes_popularGames_games;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingGames_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingGames_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_upcomingGames_highlight_background;
  floatImage: QueryHome_sections_data_attributes_upcomingGames_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_upcomingGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_upcomingGames_highlight;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_freeGames_highlight_background_data_attributes;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_freeGames_highlight_background_data;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryHome_sections_data_attributes_freeGames_highlight_floatImage_data_attributes;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryHome_sections_data_attributes_freeGames_highlight_floatImage_data;
}

export interface QueryHome_sections_data_attributes_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_data_attributes_freeGames_highlight_background;
  floatImage: QueryHome_sections_data_attributes_freeGames_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_data_attributes_freeGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_data_attributes_freeGames_highlight;
}

export interface QueryHome_sections_data_attributes {
  __typename: "Home";
  newGames: QueryHome_sections_data_attributes_newGames;
  popularGames: QueryHome_sections_data_attributes_popularGames;
  upcomingGames: QueryHome_sections_data_attributes_upcomingGames;
  freeGames: QueryHome_sections_data_attributes_freeGames;
}

export interface QueryHome_sections_data {
  __typename: "HomeEntity";
  attributes: QueryHome_sections_data_attributes;
}

export interface QueryHome_sections {
  __typename: "HomeEntityResponse";
  data: QueryHome_sections_data;
}

export interface QueryHome {
  banners: QueryHome_banners;
  newGames: QueryHome_newGames;
  upcomingGames: QueryHome_upcomingGames;
  freeGames: QueryHome_freeGames;
  sections: QueryHome_sections;
}

export interface QueryHomeVariables {
  date: any;
}
