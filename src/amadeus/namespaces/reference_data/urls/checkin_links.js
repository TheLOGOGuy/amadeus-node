/**
 * A namespaced client for the
 * `/v2/reference-data/urls/checkin-links` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls.checkinLinks;
 * ```
 *
 * @param {Client} client
 */
class CheckinLinks {
  constructor(client) {
    this.client = client;
  }

  /**
   * Returns the checkin links for an airline, for the
   * language of your choice
   *
   * @param {Object} params
   * @param {string} params.airline airline ID - required
   * @param {string} [params.language="en-GB"] the locale for the links
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find a the checkin links for Branson AirExpress
   *
   * ```js
   * amadeus.referenceData.urls.checkinLinks.get({
   *   airline: '1X'
   * });
   * ```
   */
  get(params = {}) {
    return this.client.get('/v2/reference-data/urls/checkin-links', params);
  }
}

export default CheckinLinks;
