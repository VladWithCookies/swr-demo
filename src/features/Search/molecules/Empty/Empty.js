import { Box, UnorderedList, ListItem, Text } from '@chakra-ui/react';

export default function Empty({ query }) {
  if (query === '') return null;

  return (
    <Box>
      <Text mt="2">
        Your search - <Text as="b">{query}</Text> - did not match any repositories.
      </Text>
      <Text mt="2">
        Suggestions:
      </Text>
      <UnorderedList mt="2">
        <ListItem>
          Make sure that all words are spelled correctly.
        </ListItem>
        <ListItem>
          Try different keywords.
        </ListItem>
        <ListItem>
          Try more general keywords.
        </ListItem>
        <ListItem>
          Try fewer keywords.
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
