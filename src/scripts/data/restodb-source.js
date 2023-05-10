import API_ENDPOINT from '../globals/api-endpoint';

class RestoDBSource {
  static async ListResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();

    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  }

  static async addReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };

    const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
    const responseJson = await response.json();

    return responseJson;
  }
}

export default RestoDBSource;
