import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useGameQueryStore from '../store';



export const SortSelector = () => {

  const selectedOrder = useGameQueryStore(s=>s.gameQuery.sortOrder);
  const setSelectedOrder = useGameQueryStore(s=>s.setSortOrder);

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
            {arr.map((cell)=><MenuItem onClick={() => setSelectedOrder(cell.value)} key={cell.value} value={cell.value} >{cell.label}</MenuItem>)}
            
        </MenuList>
    </Menu>
  )
}
