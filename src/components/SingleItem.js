import { ListItem, Text, Box, Stack, Badge } from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import { uuid } from "uuidv4";

const SingleItem = ({item}) => {
    return ( 
        <ListItem>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                    {item.tranType === "Income"? 
                    <AccordionButton _expanded={{ bg: "green.600", color: "white" }}>
                        <Box flex="1" textAlign="left" px="8">
                            {item.transaction}
                        </Box>
                        <Box px="8">
                            {item.date}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    :
                    <AccordionButton _expanded={{ bg: "tomato", color: "white" }} >
                        <Box flex="1" textAlign="left" px="8">
                            {item.transaction} 
                        </Box>
                        <Box px="8">
                            {item.date}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    }
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text fontSize="2xl" padding="1">{item.notes}</Text>
                        <Stack direction="row" margin="2">
                        {item.tags.split(",").map(badge => <Badge key={uuid()} >{badge}</Badge>)}
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Text></Text>
        </ListItem>
     );
}
 
export default SingleItem;