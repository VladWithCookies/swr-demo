import useSWR from 'swr';

import { httpClient, toQueryString } from 'utils/api';

export default function useQuery(url, params) {
  const key = params ? `${url}?${toQueryString(params)}` : url;
  const fetcher = (...args) => httpClient.get(...args).then(({ data }) => data);
  const response = useSWR(key, fetcher);
  const { error, data } = response;

  return {
    ...response,
    fetching: !error && !data
  };
}
