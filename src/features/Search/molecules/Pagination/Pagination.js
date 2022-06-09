import { ceil } from 'lodash';
import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { PER_PAGE } from 'constants/pagination';

export default function Pagination({ onPrev, onNext, page, total }) {
  const totalPages = ceil(total / PER_PAGE);

  return (
    <Flex mt="4" justify="space-between" align="center">
      <Button
        onClick={onPrev}
        leftIcon={<ArrowBackIcon />}
        disabled={page === 1}
      >
        Prev
      </Button>
      {page} / {totalPages}
      <Button
        onClick={onNext}
        rightIcon={<ArrowForwardIcon />}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </Flex>
  );
}
