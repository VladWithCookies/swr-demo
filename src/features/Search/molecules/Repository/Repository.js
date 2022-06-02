import numeral from 'numeral';
import { truncate, set, findIndex } from 'lodash';
import { StarIcon } from '@chakra-ui/icons';
import { Tr, Td, Button } from '@chakra-ui/react';

import { SEARCH_REPOSITORIES_ENDPOINT, USER_STARRED_ENDPOINT } from 'constants/endpoints';
import { PER_PAGE } from 'constants/pagination';
import { httpClient } from 'utils/api';
import useQuery from 'hooks/useQuery';

export default function Repository({ name, owner, description, stargazersCount, viewerHasStarred }) {
  const { mutate } = useQuery(SEARCH_REPOSITORIES_ENDPOINT, { q: 'kaifbreaker', perPage: PER_PAGE });

  const handleToggleStar = () => {
    httpClient({
      method: viewerHasStarred ? 'DELETE' : 'PUT',
      url: USER_STARRED_ENDPOINT(owner.login, name),
    });

    mutate();
  };

  return (
    <Tr>
      <Td>
        {name}
      </Td>
      <Td>
        {truncate(description, { length: 80 })}
      </Td>
      <Td isNumeric>
        {numeral(stargazersCount).format('0a')}
      </Td>
      <Td>
        <Button
          size="sm"
          aria-label="Give a star"
          onClick={handleToggleStar}
        >
          <StarIcon color={viewerHasStarred ? 'yellow.500' : 'gray.400'} />
        </Button>
      </Td>
    </Tr>
  )
}
