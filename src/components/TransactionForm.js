import { Box, Text, Input, Stack, Button, Radio, RadioGroup } from "@chakra-ui/react"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StateContext } from "../State";

const TransactionForm = () => {
    const [state, dispatch] = useContext(StateContext);
    const {register, handleSubmit} = useForm();
    
    const Onsubmit = (data) => {
        let transaction = data
        console.log(state)
        dispatch({ type: "SET_TRANSACTIONS", payload: transaction });
      };
    return (
        <Box p="2" w="50%">
            <form onSubmit={handleSubmit(Onsubmit)}>
                <Stack spacing="4">
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" w="75%" justifyContent="space-between">
                            <Text>Transaction</Text>
                            <Input type="number" min={0} w="75%" variant="filled" placeholder="Enter Transaction" name="transaction" ref={register} />
                        </Box>
                        <Box >
                            <RadioGroup display="flex" w="75%" justifyContent="space-between">
                        <Radio 
                            value="Income"
                            ref={register}
                            name="tranType"
                            cursor="pointer"
                            type="radio"
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow="md"
                            _checked={{
                                bg: "teal.600",
                                color: "red",
                                borderColor: "teal.600",
                            }}
                            _focus={{
                                boxShadow: "outline",
                            }}
                            px={5}
                            py={3}
                        >
                            Income
                        </Radio >
                        <Radio 
                            value="Expense"
                            name="tranType"
                            ref={register}
                            cursor="pointer"
                            borderWidth="1px"
                            borderRadius="md"
                            boxShadow="md"
                            _checked={{
                                bg: "red.600",
                                color: "red",
                                borderColor: "red.600",
                            }}
                            _focus={{
                                boxShadow: "outline",
                            }}
                            px={5}
                            py={3}
                        >
                            Expense
                        </Radio >
                        </RadioGroup>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" justifyContent="space-between" w="75%" >
                            <Text>Notes</Text>
                            <Input type="text" w="75%" variant="filled" placeholder="Enter Notes" name="notes" ref={register} />
                        </Box>
                        <Box display="flex" w="75%" justifyContent="space-between">
                            <Text>Tags</Text>
                            <Input type="text" w="75%" variant="filled" placeholder="Enter Related Tags" name="tags" ref={register} />
                        </Box>
                    </Box>
                    <Button 
                        type="submit" 
                        w="25%" 
                        alignSelf="center" 
                        _hover={{
                            bg: "green.600", 
                            boxShadow: "outline",
                        }}
                        >Submit
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default TransactionForm;