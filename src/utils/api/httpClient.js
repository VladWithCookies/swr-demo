import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { GITHUB_API_URL, GITHUB_API_KEY } from 'constants/api';

export const apiInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`
  }
});

export const httpClient = applyCaseMiddleware(apiInstance, { ignoreHeaders: true });
