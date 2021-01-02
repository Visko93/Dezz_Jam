import api from './api'
//import path from 'path'

export default async function getTrendingList(offset) {
  console.log(offset)
  try {
    if (offset === 0) {
      const res = await api.get(`chart/0/tracks`)
      const { data } = res.data

      return data
    } else {
      const res = await api.get(`chart/0/tracks?index=${String(offset)}`)
      const { data } = res.data
      return data
    }
  } catch (e) {
    console.log(`Um erro ocorreu: ${e}`)
  }
}
