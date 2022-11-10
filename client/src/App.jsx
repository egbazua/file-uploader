import { ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
} from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Center h='100vh' bg='black' color='white'>
        <Container>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' />
            <FormHelperText>Enter your title.</FormHelperText>
          </FormControl>
        </Container>
      </Center>
    </ChakraProvider>
  )
}

export default App;
