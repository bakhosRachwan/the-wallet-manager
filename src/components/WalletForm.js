import { Input, Stack, Text, Button, Box, Select } from "@chakra-ui/react"
import React, { useContext } from "react";
import { StateContext } from "../State";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import { uuid } from "uuidv4";

const WalletForm = () => {
    const [state, dispatch] = useContext(StateContext);
    const {register, handleSubmit} = useForm();
    const history = useHistory();

  const handleCreateWallet = (data, e) => {
      let wallet = data
    console.log(state);
    console.log(wallet);
    dispatch({ type: "SET_WALLETS", payload: wallet });
    history.push(`/transaction/${data.name}`)
    e.target.reset();
  };

    return (
        <Box  h="90%" p="2" display="flex" alignItems="center" justifyContent="center">
            <form onSubmit={handleSubmit(handleCreateWallet)} style={{width: "50%"}}>
                <Stack spacing={2}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Name:</Text>
                        <Input type="name" name="name" size="md" w="75%" variant="filled" placeholder="Enter Name" ref={register} required  />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Currency:</Text>
                        <Select w="75%" name="currency" variant="filled" ref={register}>
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Lebanese Pound</option>
                        </Select>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Balance:</Text>
                        <Input type="number" min={0} w="75%" variant="filled" placeholder="Enter Initial Balance" name="balance" ref={register} required  />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Description:</Text>
                        <Input type="text" w="75%" variant="filled" placeholder="Wallet Description" name="desc" ref={register} required  />
                    </Box>
                    <Button type="submit" w="50%" alignSelf="center" colorScheme="blue">Create Wallet</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default WalletForm;