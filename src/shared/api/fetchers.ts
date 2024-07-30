import { CharacterQueryParams, MarvelApiResponse } from '../types/marvel-api'

import { API } from './settings'

const getQueryParams = (params: CharacterQueryParams = {}): string => {
  const { PUBLIC_KEY, TS, HASH } = API

  const queryParams = {
    ...params,
    apikey: PUBLIC_KEY,
    ts: TS,
    hash: HASH,
  }

  return new URLSearchParams(queryParams).toString()
}

export const fetchCharacters = async (
  params: CharacterQueryParams = {},
): Promise<MarvelApiResponse> => {
  const url = `${API.BASE_URL}/characters?${getQueryParams({
    ...params,
    limit: '50',
    orderBy: 'modified',
  })}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const fetchCharacter = async (id: number): Promise<MarvelApiResponse> => {
  const url = `${API.BASE_URL}/characters/${id}?${getQueryParams()}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const fetchCharacterComics = async (id: number): Promise<MarvelApiResponse> => {
  const url = `${API.BASE_URL}/characters/${id}/comics?${getQueryParams({
    orderBy: '-onsaleDate',
  })}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
