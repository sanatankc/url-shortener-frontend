import { BASE_URL } from '../CONSTANTS'

const generateShortCodeByURL = async url => {
  const query = `
  mutation {
    url(url: "${url}") {
      shortcode
    }
  }`

  try {
    const res = await fetch(`${BASE_URL}/graphql?query=${query}`, {
      method: 'POST'
    })
    const data = (await res.json()).data.url
    return data
  } catch(e) {
    return {
      error: 'There was some problem with api.'
    }
  }
}

export default generateShortCodeByURL
