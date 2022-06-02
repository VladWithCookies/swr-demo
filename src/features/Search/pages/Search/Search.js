import { SWRConfig } from 'swr';

import { SEARCH_REPOSITORIES_ENDPOINT } from 'constants/endpoints';
import { httpClient } from 'utils/api/httpClient';
import SearchPanel from 'features/Search/organisms/SearchPanel';
import { PER_PAGE } from 'constants/pagination';
import { toQueryString } from 'utils/api';

export default function Search({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <SearchPanel />
    </SWRConfig>
  );
}

export async function getServerSideProps() {
  const params = { q: 'kaifbreaker', perPage: PER_PAGE };
  const url = `${SEARCH_REPOSITORIES_ENDPOINT}?${toQueryString(params)}`;
  const data = await httpClient.get(url).then(({ data }) => data);

  return {
    props: {
      fallback: {
        [url]: data
      }
    }
  };
}
