import api from './api'
//import path from 'path'

// eslint-disable-next-line no-dupe-args
export default async function getSearchMusic(constrain: string, query: string) {
  try {
    const res = await api.get(`search?q=${constrain}:${query}`)
    const { data } = res.data

    return data
  } catch (e) {
    console.log(`Um erro ocorreu: ${e}`)
  }
}
