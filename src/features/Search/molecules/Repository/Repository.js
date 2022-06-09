import numeral from 'numeral';
import { truncate } from 'lodash';
import { StarIcon } from '@chakra-ui/icons';
import { Tr, Td, Button } from '@chakra-ui/react';

import { USER_STARRED_ENDPOINT } from 'constants/endpoints';
import { httpClient } from 'utils/api';

export default function Repository({
  name,
  owner,
  description,
  stargazersCount,
  viewerHasStarred,
  onToggleStar
}) {
  const handleToggleStar = () => {
    httpClient({
      method: viewerHasStarred ? 'DELETE' : 'PUT',
      url: USER_STARRED_ENDPOINT(owner.login, name),
    });

    onToggleStar();
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
