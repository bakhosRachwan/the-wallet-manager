import { Box, Text, Input, Stack, Button, Radio, RadioGroup } from "@chakra-ui/react"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { StateContext } from "../State";

const TransactionForm = () => {
    const [state, dispatch] = useContext(StateContext);
    const {register, handleSubmit} = useForm();
    const { name } = useParams();
        
    const Onsubmit = (data, e) => {
        let transaction = {
            ...data,
            walletname: name,
            date: new Date().toDateString()
        }
        console.log(state)
        dispatch({ type: "SET_TRANSACTIONS", payload: transaction });
        e.target.reset();
      };
    return (
        <Box w="100%" display={{md:"flex"}} justifyContent="center" >
            <form onSubmit={handleSubmit(Onsubmit)}>
                <Stack spacing="4">
                    <Box w={[100, 100, 500, 1500]} display={{lg: "flex"}} justifyContent={{md: "space-evenly"}}>
                        <Box  display={{md:"flex"}} w={[250, 100, 500, 1200]} justifyContent="space-between" alignItems="center">
                            <Text>Transaction:</Text>
                            <Input  type="number" min={0} w="75%" variant="filled" placeholder="Enter Transaction" name="transaction" ref={register} required  />
                        </Box>
                        <Box >
                            <RadioGroup display={{md:"flex"}} w={[220, 100, 300]} justifyContent="space-evenly" required >
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
                        <Box  display={{md: "flex"}} justifyContent="space-between" alignItems={{md: "center"}} w={[220, 100, 500, 1200]} px={{md: "4"}}>
                            <Text>Notes:</Text>
                            <Input type="text" w="100%" variant="filled" placeholder="Enter Notes" name="notes" ref={register} required  />
                        </Box>
                        <Box display={{md: "flex"}} w={[220, 100, 500, 1200]} justifyContent="space-between" alignItems={{md:"center"}}>
                            <Text>Tags:</Text>
                            <Input type="text" w="100%" variant="filled" placeholder="Enter Tags Seperated by COMMAS" name="tags" ref={register} required  />
                        </Box>
                    </Box>
                    <Button 
                        type="submit" 
                        w={{md:"25%"}} 
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