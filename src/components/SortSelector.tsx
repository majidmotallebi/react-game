import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'


interface Props{
    onSortOrder:(sortOrder:string)=>void,
    selectedOrder:string
}
export const SortSelector = ({onSortOrder,selectedOrder}:Props) => {

    const arr= [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

const currentSelectOrder = arr.find(order=>order.value === selectedOrder)
    
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}> order by : {currentSelectOrder?.label || ' Revelance'} </MenuButton>
        <MenuList>
            {arr.map((cell)=><MenuItem onClick={() => onSortOrder(cell.value)} key={cell.value} value={cell.value} >{cell.label}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}
