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
  results: ApiResult
}

export type ApiResult = Character[] | Comic[]

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: CharacterComics
  series: Series
  stories: Stories
  events: Events
  urls: Url[]
}

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: string
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  thumbnail: Thumbnail
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface CharacterComics {
  available: number
  collectionURI: string
  items: CharacterComic[]
  returned: number
}

export interface CharacterComic {
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

export interface CharacterQueryParams {
  nameStartsWith?: string
}
