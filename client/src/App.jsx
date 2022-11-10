import { ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Heading,
} from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Center h='100vh' bg='black' color='white'>
        <Container>
        <Heading as='h1' mb='4' textAlign='center' >File Uploader</Heading>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' />
            <FormHelperText>Enter your title.</FormHelperText>
            <Input type='file' mt='3' />
            <FormHelperText>Upload your file.</FormHelperText>
          </FormControl>
        </Container>
      </Center>
    </ChakraProvider>
  )
}

export default App;
