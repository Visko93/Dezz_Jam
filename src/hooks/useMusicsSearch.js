import React, { useState } from 'react'
import api from '../api/api'

export default function useMusicsSearch({ params, query }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [musicList, setMusicList] = useState(false)

  React.useEffect(() => {
    api
      .get(`search//${params}?q=:${query}&order=RANKING&limit=10`)
      .then((res) => {
        setMusicList(res.data)
      })
      .catch((e) => console.log(`${e}`).finally(setLoading(false)))
  }, [])
  console.log(musicList)
  return
  // return { loading, error, musicList }
}
