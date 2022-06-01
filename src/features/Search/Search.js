import { useState } from 'react';
import { isEmpty } from 'lodash';
import { CircularProgress, Container, Center } from '@chakra-ui/react';

import { PER_PAGE } from 'constants/pagination';
import SearchInput from 'components/SearchInput';
import Repositories from 'components/Repositories';
import Pagination from 'components/Pagination';
import Empty from 'components/Empty';

export default function Search() {
  const [query, setQuery] = useState('');

  const fetching = false;
  const repositories = [];
  const handlePrev = () => null;
  const handleNext = () => null;
  const hasNextPage = false;
  const hasPreviousPage = false;

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
        <Repositories repositories={repositories} />
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
