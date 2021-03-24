import { ListItem, Text, Box } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";

const SingleItem = ({item}) => {
    return ( 
        <ListItem>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    {item.tranType === "Income"? 
                    <AccordionButton _expanded={{ bg: "green.600", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            {item.transaction}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    :
                    <AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
                        <Box flex="1" textAlign="left">
                            {item.transaction}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    }
                    </h2>
                    <AccordionPanel pb={4}>
                        {item.notes}
                        {item.tags}
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Text></Text>
        </ListItem>
     );
}
 
export default SingleItem;