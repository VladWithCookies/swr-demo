import { map } from 'lodash';
import { Box, TableContainer, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';

import Repository from 'features/Search/molecules/Repository';

export default function Repositories({ repositories, renderItem }) {
  return (
    <Box borderWidth="1px" borderRadius="6px" mt="4">
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th isNumeric>Stars</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {map(repositories, renderItem)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
