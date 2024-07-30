import { useContext, useEffect } from 'react'

import { ComicsContext } from '../../context/comics'

export const useComics = (characterId: number | null) => {
  const { comics, loadComics, loading, ...rest } = useContext(ComicsContext)

  useEffect(() => {
    if (!characterId) return
    loadComics(characterId)
  }, [characterId, loadComics])

  return { comics, loading, loadComics, ...rest }
}
