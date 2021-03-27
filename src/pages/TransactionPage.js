import { Avatar, AvatarBadge, Flex } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { useParams } from "react-router";
import ListSection from "../components/ListSection";
import TransactionForm from "../components/TransactionForm";
import { StateContext } from "../State";

const TransactionPage = () => {
    const [state] = useContext(StateContext);
    const { name } = useParams();
    const income = state.transactions.filter(wallet => {return wallet.walletname === name && wallet.tranType === "Income"}).map(elem => +elem.transaction).reduce((acc, cum) => {return acc+cum},0)
    const expense = state.transactions.filter(wallet => {return wallet.walletname === name && wallet.tranType === "Expense"}).map(elem => +elem.transaction).reduce((acc, cum) => {return acc+cum},0)
    const initBalance = state.wallets.filter(wallet => wallet.name === name);
    const totalBalance = parseInt(initBalance[0].balance) + income - expense
    const condition = totalBalance < 0
    return (
        <Flex>
        <Box display="flex" flexDirection="column" border="1px" w="85%">
            <Box display="flex">
            <Avatar name={name} alignSelf="center" >
                <AvatarBadge boxSize="1.25em" bg={condition ? "red.500": "green.500"} />
            </Avatar>
            <Text fontSize={{sm: "4xl", md:"5xl"}} ml="5%">Balance: {totalBalance} {initBalance[0].currency} </Text>
            </Box>
            <Box p="8"><TransactionForm  /></Box>
            <ListSection/>
        </Box>
            <Box alignSelf="end" width="250px" h="700px" bg="blue">hello</Box>
        </Flex>
     );
}
 
export default TransactionPage;