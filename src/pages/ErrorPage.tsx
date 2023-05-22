import { Heading, Text,Box } from '@chakra-ui/react'
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { NavBar } from '../components/NavBar';

 const ErrorPage = () => {

    const error = useRouteError();
  return (
    <>
       <NavBar />  
       <Box padding={10}>
       
            <Heading >Oops</Heading>
            <Text> {isRouteErrorResponse(error) ? 'this page dose not exist.' :
                'an unexpected error occurred.'}</Text>
        </Box>

      
    </>
  )
}
export default ErrorPage;