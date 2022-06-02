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
  const [query, setQuery] = useState('kaifbreaker');
  const { data, fetching } = useQuery(SEARCH_REPOSITORIES_ENDPOINT, { q: query, perPage: PER_PAGE });

  const repositories = data?.items;
  const hasNextPage = false;
  const hasPreviousPage = false;

  const handlePrev = () => null;
  const handleNext = () => null;

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
              {...repository}
            />
          )}
        />
      )}
      {!isEmpty(repositories) && (
        <Pagination
          onPrev={handlePrev}
          onNext={handleNext}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
        />
      )}
    </Container>
  );
}
