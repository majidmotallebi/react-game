import { HStack, Image, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";



export const NavBar = () => {
  return (
  <HStack justifyContent="space-between" padding="10px">
    <Link to='/'>
       <Image src={logo} boxSize="60px" objectFit='cover'/>
    </Link>
  
    <SearchInput/>
    <ColorModeSwitch/>
  </HStack>
  )
}
