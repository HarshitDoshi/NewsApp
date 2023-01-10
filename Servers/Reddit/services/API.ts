import axios from 'axios';

const REDDIT_URL = 'https://www.reddit.com';
const API_URL = '/api';
const V1_URL = '/v1';
const ACCESS_TOKEN_URL = REDDIT_URL + API_URL + V1_URL + '/access_token';

export class API {
  path: string;

  constructor(path: string) {
    this.path = path;
  }

  async fetchToken() {
    const returnValue = await axios.post(
      ACCESS_TOKEN_URL,
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET}`
          ).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
      }
    ).then((response) => {
      console.log('response', response);
      return response;
    });
    return returnValue;
  }
}

const at = new API("access_token");
const atValue = await at.fetchToken();
console.log('atValue', atValue);
