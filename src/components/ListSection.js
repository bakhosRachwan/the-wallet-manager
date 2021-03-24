import { Box, Heading, List } from "@chakra-ui/react";
import { useContext } from "react";
import { StateContext } from "../State";
import SingleItem from "./SingleItem";
import { uuid } from "uuidv4";
const ListSection = () => {
    const [state, dispatch] = useContext(StateContext)
    return ( 
        <Box>
            <Heading>All Transactions Recorded</Heading>
            <List>
            {state.transactions.map((item) =>
             <SingleItem item={item} key={uuid()}/>
            )}    
            </List>   
       </Box>
     );
}
 
export default ListSection;