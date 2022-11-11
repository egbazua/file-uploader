import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Heading,
  Button,
} from '@chakra-ui/react';

const App = () => {

  const [post, setPost] = useState({
    title: '',
    data: null
  })

  return (
    <ChakraProvider>
      <Center h='100vh' bg='black' color='white'>
        <Container>
        <Heading as='h1' mb='4' textAlign='center' >File Uploader</Heading>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text' onChange={ e => setPost({ ...post, title: e.target.value })} />
            <FormHelperText>Enter your title.</FormHelperText>
            <Input type='file' mt='3' name='data' onChange={ e => setPost({ ...post, data: e.target.files[0] })} />
            <FormHelperText>Upload your file.</FormHelperText>
            <Button colorScheme='teal' type='submit' mt='3'>Submit</Button>
          </FormControl>
        </Container>
      </Center>
    </ChakraProvider>
  )
}

export default App;
