export default function buildPipedriveProvider({ issueHttpRequest }) {
  return Object.freeze({
    getWonDeals,
  })

  async function getWonDeals() {
    const baseURL = process.env.PIPEDRIVE_BASE_URL
    const apiKey = process.env.PIPEDRIVE_API_KEY
    const options = {
      baseURL,
      url: `/deals/?status=won&api_token=${apiKey}`,
      method: "get",
    }
    const response = await issueHttpRequest(options)
    if (response.data.success != true) {
      throw new Error({ error: response.data.error, errorCode: response.data.errorCode })
    }
    return response.data.data
  }
}
