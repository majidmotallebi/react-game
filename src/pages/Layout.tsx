import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

const Layout = () => {
  return (
     <>
        <NavBar />
        <Box padding={10}></Box>
        <Outlet />
    
    </>
  )
}

export default Layout;
