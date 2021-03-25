import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItemOption, MenuOptionGroup, MenuDivider, MenuList } from "@chakra-ui/react";
import { useContext } from "react";
import { uuid } from "uuidv4";
import { StateContext } from "../State";
import { Link } from "react-router-dom"

const Navbar = () => {
    const  [state, dispatch]  = useContext(StateContext)
    return ( 
        <Flex p="2" mb="2" >
            <Box>
                <Heading fontSize={{sm:"4xl", md: "4xl"}}>Wallet Manager</Heading>
            </Box>
            <Spacer />
            <Box display="flex" >
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme="blue">
                        Wallets
                </MenuButton>
                    <MenuList minWidth="240px">
                        <MenuOptionGroup title="Wallets" type="checkbox">
                            {state.wallets.map((wallet) => (
                                <Link to={`/transaction/${wallet.name}`}>
                                 <MenuItemOption key={uuid()}>
                                     {wallet.name}
                                </MenuItemOption>
                                </Link>
                            ))}
                        </MenuOptionGroup>
                        <MenuDivider />
                            <Link to="/">
                                <MenuItemOption value="wallet" as={Button}>New Wallet</MenuItemOption>
                            </Link>
                    </MenuList>
                </Menu>
            <Button variant="ghost">ABOUT</Button>
            </Box>
        </Flex>
     );
}
 
export default Navbar;