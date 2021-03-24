import { Box, Button, Flex, Heading, Select, Spacer, Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../State";
// import { Link } from "react-router-dom"

const Navbar = () => {
    const  [state, dispatch]  = useContext(StateContext)
    return ( 
        <Flex p="2" >
            <Box>
                <Heading as="h1">Wallet Manager</Heading>
            </Box>
            <Spacer />
            <Box display="flex" >
            <Select variant="flushed" placeholder="Wallets" >
            {state.wallets.map((wallet) => (
            //   <Link to={`/transaction/${wallet.name}`}>
                <option key={Date.now()}>{wallet.name}</option>
            //   </Link>
            ))}
                <Divider orientation="horizontal" variant="solid" colorScheme="gray" />   
                <option>Add New Wallet</option>
            </Select>
            <Button variant="ghost">ABOUT</Button>
            </Box>
        </Flex>
     );
}
 
export default Navbar;