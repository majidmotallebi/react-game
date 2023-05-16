import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown, BsChevronDown } from 'react-icons/bs'
import usePlatform, { PlatformItem } from '../hooks/usePlatform';
import useGameQueryStore from '../store';




export const Platform = () => {

  const selectedPlarformId = useGameQueryStore(s=>s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore(s=>s.setPlatformId)

    const {data,error}= usePlatform();
    const selectedPlarform= data?.results.find(s=>s.id === selectedPlarformId)
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          {selectedPlarform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
            {data?.results.map((platform)=>
            <MenuItem key={platform.id} onClick={()=>setSelectedPlatform(platform.id)}>
              {platform.name}
            </MenuItem>)}
           
        </MenuList>
    </Menu>
  )
}
