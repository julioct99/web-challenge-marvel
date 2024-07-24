import { FAKE_LIST_RESPONSE } from '../../mock-data'
import { MarvelApiResponse } from '../types/marvel-api'
import { API } from './settings'

const DEFAULT_QUERY_PARAMS = {
  orderBy: 'modified',
}

const getQueryParams = (): string => {
  const { PUBLIC_KEY, TS, HASH } = API
  return new URLSearchParams({
    ...DEFAULT_QUERY_PARAMS,
    apikey: PUBLIC_KEY,
    ts: TS,
    hash: HASH,
  }).toString()
}

export const fetchCharacters = async (): Promise<MarvelApiResponse> => {
  // const url = `${API.BASE_URL}/characters?${getQueryParams()}`
  // const response = await fetch(url)
  // const data = await response.json()
  // return data

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_LIST_RESPONSE)
    }, 1000)
  })
}
