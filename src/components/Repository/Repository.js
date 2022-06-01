import { truncate } from 'lodash';
import { StarIcon } from '@chakra-ui/icons';
import { Tr, Td, Button } from '@chakra-ui/react';

export default function Repository({ name, description, stargazerCount, viewerHasStarred }) {
  const handleToggleStar = () => null;

  return (
    <Tr>
      <Td>
        {name}
      </Td>
      <Td>
        {truncate(description, { length: 80 })}
      </Td>
      <Td isNumeric>
        {stargazerCount}
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
