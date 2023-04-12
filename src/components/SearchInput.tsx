import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>} />
     <Input variant='filled' borderRadius={20} placeholder='Search games...' />
    </InputGroup>
  )
}
