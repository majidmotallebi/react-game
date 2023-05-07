import {FaWindows,FaPlaystation,FaApple,FaXbox,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Icon } from '@chakra-ui/react'
import { PlatformItem } from '../hooks/usePlatform'
import { IconType } from 'react-icons/lib'
import { HStack } from '@chakra-ui/react';

interface Props{
    platform:PlatformItem[]
}

export const PlatformListIcons = ({platform}:Props) => {

    const iconMap:{[key:string]:IconType} ={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        android:FaAndroid,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
    }
  return (
      <HStack marginY={1}>
  
     {platform.map((platform)=><Icon boxSize={5} key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>)}
     </HStack>
  )
}
