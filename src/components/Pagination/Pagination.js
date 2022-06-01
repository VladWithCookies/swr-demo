import { Button, Flex } from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';

export default function Pagination({ onPrev, onNext, hasPreviousPage, hasNextPage }) {
  return (
    <Flex mt="4" justify="space-between" align="center">
      <Button
        onClick={onPrev}
        leftIcon={<ArrowBackIcon />}
        disabled={!hasPreviousPage}
      >
        Prev
      </Button>
      <Button
        onClick={onNext}
        rightIcon={<ArrowForwardIcon />}
        disabled={!hasNextPage}
      >
        Next
      </Button>
    </Flex>
  );
}
