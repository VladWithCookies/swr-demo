import { map } from 'lodash';
import { Box, TableContainer, Table, Thead, Tbody, Tr, Th } from '@chakra-ui/react';

import Repository from 'components/Repository';

export default function Repositories({ repositories }) {
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
            {map(repositories, ({ id }) => <Repository key={id} />)}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
