/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcomingGames_data_attributes_cover_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upcomingGames_data_attributes_cover_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes_cover_data_attributes;
}

export interface QueryUpcoming_upcomingGames_data_attributes_cover {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_upcomingGames_data_attributes_cover_data;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers_data_attributes {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers_data {
  __typename: "DeveloperEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes_developers_data_attributes;
}

export interface QueryUpcoming_upcomingGames_data_attributes_developers {
  __typename: "DeveloperRelationResponseCollection";
  data: QueryUpcoming_upcomingGames_data_attributes_developers_data[];
}

export interface QueryUpcoming_upcomingGames_data_attributes {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryUpcoming_upcomingGames_data_attributes_cover;
  developers: QueryUpcoming_upcomingGames_data_attributes_developers;
  price: number;
}

export interface QueryUpcoming_upcomingGames_data {
  __typename: "GameEntity";
  attributes: QueryUpcoming_upcomingGames_data_attributes;
}

export interface QueryUpcoming_upcomingGames {
  __typename: "GameEntityResponseCollection";
  data: QueryUpcoming_upcomingGames_data[];
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data_attributes;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background_data;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data {
  __typename: "UploadFileEntity";
  attributes: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data_attributes;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage {
  __typename: "UploadFileEntityResponse";
  data: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage_data;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_background;
  floatImage: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight_floatImage;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryUpcoming_showcase_data_attributes_upcomingGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryUpcoming_showcase_data_attributes_upcomingGames_highlight;
}

export interface QueryUpcoming_showcase_data_attributes {
  __typename: "Home";
  upcomingGames: QueryUpcoming_showcase_data_attributes_upcomingGames;
}

export interface QueryUpcoming_showcase_data {
  __typename: "HomeEntity";
  attributes: QueryUpcoming_showcase_data_attributes;
}

export interface QueryUpcoming_showcase {
  __typename: "HomeEntityResponse";
  data: QueryUpcoming_showcase_data;
}

export interface QueryUpcoming {
  upcomingGames: QueryUpcoming_upcomingGames;
  showcase: QueryUpcoming_showcase;
}

export interface QueryUpcomingVariables {
  date: any;
}
