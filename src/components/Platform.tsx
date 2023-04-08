import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatform, { PlatformItem } from '../hooks/usePlatform';

interface Props{
    selectedPlarform: PlatformItem|null
    onSelectedPlatform:(platform:PlatformItem)=>void
}

export const Platform = ({selectedPlarform,onSelectedPlatform}:Props) => {
    const {data,error}= usePlatform();
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlarform?.name || 'Platform'}</MenuButton>
        <MenuList>
            {data.map((platform)=><MenuItem onClick={()=>onSelectedPlatform(platform)}>{platform.name}</MenuItem>)}
           
        </MenuList>
    </Menu>
  )
}
