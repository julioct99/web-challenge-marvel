import {
  FAKE_COMIC_LIST_RESPONSE,
  FAKE_DETAIL_RESPONSE,
  FAKE_LIST_RESPONSE,
} from '../../mock-data'
import { CharacterQueryParams, MarvelApiResponse } from '../types/marvel-api'
import { API } from './settings'

const DEFAULT_QUERY_PARAMS = {
  orderBy: 'modified',
}

const getQueryParams = (params: CharacterQueryParams = {}): string => {
  const { PUBLIC_KEY, TS, HASH } = API

  return new URLSearchParams({
    ...DEFAULT_QUERY_PARAMS,
    ...params,
    apikey: PUBLIC_KEY,
    ts: TS,
    hash: HASH,
  }).toString()
}

export const fetchCharacters = async (
  params: CharacterQueryParams = {}
): Promise<MarvelApiResponse> => {
  if (params.nameStartsWith) {
    const url = `${API.BASE_URL}/characters?${getQueryParams(params)}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_LIST_RESPONSE)
    }, 1000)
  })
}

export const fetchCharacter = async (id: number): Promise<MarvelApiResponse> => {
  // const url = `${API.BASE_URL}/characters/${id}?${getQueryParams()}`
  // const response = await fetch(url)
  // const data = await response.json()
  // return data
  console.log(id)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_DETAIL_RESPONSE)
    }, 1000)
  })
}

export const fetchCharacterComics = async (id: number): Promise<MarvelApiResponse> => {
  // const url = `${API.BASE_URL}/characters/${id}/comics?${getQueryParams()}`
  // const response = await fetch(url)
  // const data = await response.json()
  // return data
  console.log(id)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_COMIC_LIST_RESPONSE)
    }, 1000)
  })
}
