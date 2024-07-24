export interface MarvelApiResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: Data
}

export interface Data {
  offset: number
  limit: number
  total: number
  count: number
  results: ApiResource[]
}

export type ApiResource = Character

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: Comics
  series: Series
  stories: Stories
  events: Events
  urls: Url[]
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface Comics {
  available: number
  collectionURI: string
  items: Comic[]
  returned: number
}

export interface Comic {
  resourceURI: string
  name: string
}

export interface Series {
  available: number
  collectionURI: string
  items: SeriesItem[]
  returned: number
}

export interface SeriesItem {
  resourceURI: string
  name: string
}

export interface Stories {
  available: number
  collectionURI: string
  items: Story[]
  returned: number
}

export interface Story {
  resourceURI: string
  name: string
  type: string
}

export interface Events {
  available: number
  collectionURI: string
  items: Event[]
  returned: number
}

export interface Event {
  resourceURI: string
  name: string
}

export interface Url {
  type: string
  url: string
}
