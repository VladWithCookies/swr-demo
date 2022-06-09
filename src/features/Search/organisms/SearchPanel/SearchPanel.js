import { useState } from 'react';
import { isEmpty } from 'lodash';
import { CircularProgress, Container, Center } from '@chakra-ui/react';

import { PER_PAGE } from 'constants/pagination';
import useQuery from 'hooks/useQuery';
import { SEARCH_REPOSITORIES_ENDPOINT } from 'constants/endpoints';
import Empty from 'features/Search/molecules/Empty';
import SearchInput from 'features/Search/molecules/SearchInput';
import Repositories from 'features/Search/molecules/Repositories';
import Repository from 'features/Search/molecules/Repository';
import Pagination from 'features/Search/molecules/Pagination';

export default function Search() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('kaifbreaker');
  const { data, fetching, mutate } = useQuery(SEARCH_REPOSITORIES_ENDPOINT, { q: query, page, perPage: PER_PAGE });

  const total = data?.totalCount;
  const repositories = data?.items;

  const handlePrev = () => setPage((page) => page - 1);
  const handleNext = () => setPage((page) => page + 1);

  return (
    <Container mt="20" maxW='container.lg'>
      <SearchInput onSubmit={setQuery} />
      {fetching ? (
        <Center w="100" h="368px">
          <CircularProgress isIndeterminate />
        </Center>
      ) : isEmpty(repositories) ? (
        <Empty query={query} />
      ) : (
        <Repositories
          repositories={repositories}
          renderItem={(repository) => (
            <Repository
              key={repository.id}
              onToggleStar={mutate}
              {...repository}
            />
          )}
        />
      )}
      {!isEmpty(repositories) && (
        <Pagination
          page={page}
          total={total}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </Container>
  );
}
