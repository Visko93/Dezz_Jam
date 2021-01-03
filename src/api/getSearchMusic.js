import api from './api'
//import path from 'path'

// eslint-disable-next-line no-dupe-args
export default async function getSearchMusic(constrain, query, limit = 10) {
  try {
    const res = await api.get(
      `search//${constrain}?q=:${query}&order=RANKING&limit=${limit}`,
    )
    const { data } = res.data

    return data
  } catch (e) {
    console.log(`Um erro ocorreu: ${e}`)
  }
}
