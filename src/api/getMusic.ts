import api from './api'
//import path from 'path'

export default async function getTrendingList() {
  try {
    const res = await api.get('/chart')
    return res.data
  } catch (e) {
    console.log(`Um erro ocorreu: ${e}`)
  }
}
