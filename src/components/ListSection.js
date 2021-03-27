import { Box, Heading, List } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../State";
import SingleItem from "./SingleItem";
import { uuid } from "uuidv4";
import { useParams } from "react-router";
const ListSection = () => {
    const { name } = useParams()
    const [state] = useContext(StateContext)
    return ( 
        <Box  display="flex" flexDirection="column" alignItems="center">
            <Heading mt="10" mb="10" fontSize={{sm:"4xl", md: "4xl"}}>All Transactions Recorded</Heading>
            <List w="75%"  alignSelf="center" bg="darkcyan.200">
            {state.transactions.map((item) =>
                item.walletname === name?
             <SingleItem item={item} key={uuid()}/>: null
            )}    
            </List>   
       </Box>
     );
}
 
export default ListSection;