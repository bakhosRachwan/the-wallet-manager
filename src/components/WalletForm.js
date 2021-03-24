import { Input, Stack, Text, Button, Box, Select } from "@chakra-ui/react"
import React, { useContext } from "react";
import { StateContext } from "../State";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { uuid } from "uuidv4";

const WalletForm = () => {
    const [state, dispatch] = useContext(StateContext);
    const {register, handleSubmit} = useForm();
  const handleCreateWallet = (data) => {
      let wallet = data
    console.log(state);
    console.log(wallet);
    dispatch({ type: "SET_WALLETS", payload: wallet });
  };

    return (
        <Box width="550px" p="2" bgGradient="linear(to-r, #e9defa, #fbfcdb)">
            <form onSubmit={handleSubmit(handleCreateWallet)}>
                <Stack spacing={2}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Name:</Text>
                        <Input type="name" name="name" size="md" w="75%" placeholder="Enter Name" ref={register} />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Currency:</Text>
                        <Select w="75%" name="currency" ref={register}>
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Lebanese Pound</option>
                        </Select>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Balance:</Text>
                        <Input type="number" min={0} w="75%" placeholder="Enter Initial Balance" name="balance" ref={register} />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Description:</Text>
                        <Input type="text" w="75%" placeholder="Wallet Description" name="desc" ref={register} />
                    </Box>
                    <Button type="submit" w="50%" alignSelf="center">Create Wallet</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default WalletForm;