import { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

export default function SearchInput({ onSubmit }) {
  const [value, setValue] = useState('kaifbreaker');

  const handleChange = (event) => setValue(event.target.value);

  const handleSubmit = () => {
    onSubmit(value);
    setValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <InputGroup size="md">
      <Input
        pr="5.2rem"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Search for a repository...'
      />
      <InputRightElement width='5.2rem'>
        <Button
          h="1.8rem"
          size="sm"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
