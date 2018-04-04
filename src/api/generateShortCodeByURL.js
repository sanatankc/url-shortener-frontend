import { BASE_URL } from '../CONSTANTS'

const generateShortCodeByURL = async url => {
  try {
    const res = await fetch(`${BASE_URL}/newshort/${url}`)
    const data = await res.json()
    return data
  } catch(e) {
    return {
      error: 'There was some problem with api.'
    }
  }
}

export default generateShortCodeByURL
