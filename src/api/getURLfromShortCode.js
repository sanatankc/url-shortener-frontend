import { BASE_URL } from '../CONSTANTS'

const getURLfromShortCode = async shortcode => {
  const query = `
  query {
    url(shortcode: "${shortcode}") {
      url
    }
  }`

  try {
    const res = await fetch(`${BASE_URL}/graphql?query=${query}`)
    const data = (await res.json()).data.url
    const url = data === null ? null : data.url
    return url
  } catch(e) {
    console.error(e)
    return {
      error: 'There was some problem with api.'
    }
  }
}

export default getURLfromShortCode
