import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatform, { PlatformItem } from '../hooks/usePlatform';
import { gameQuery } from '../App';

interface Props{
    selectedPlarformId?: number
    onSelectedPlatform:(platform:PlatformItem)=>void
}

export const Platform = ({selectedPlarformId,onSelectedPlatform}:Props) => {
    const {data,error}= usePlatform();
    const selectedPlarform= data?.results.find(s=>s.id === selectedPlarformId)
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          {selectedPlarform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform)=>
            <MenuItem key={platform.id} onClick={()=>onSelectedPlatform(platform)}>
              {platform.name}
            </MenuItem>)}
           
        </MenuList>
    </Menu>
  )
}
