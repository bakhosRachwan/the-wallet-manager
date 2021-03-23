import { Input, Stack, Radio, RadioGroup, Text, Button, Box, Select } from "@chakra-ui/react"

const WalletForm = () => {
    return (
        <Box width="550px" p="2" bgGradient="linear(to-r, #e9defa, #fbfcdb)">
            <form>
                <Stack spacing={2}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Name:</Text>
                        <Input type="name" size="md" w="75%" placeholder="Enter Name" />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Currency:</Text>
                        <Select w="75%" >
                            <option>Dollar</option>
                            <option>Euro</option>
                            <option>Lebanese Pound</option>
                        </Select>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Balance:</Text>
                        <Input type="number" min={0} w="75%" placeholder="Enter Initial Balance" />
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Description:</Text>
                        <Input type="text" w="75%" placeholder="Wallet Description" />
                    </Box>
                    <Button type="submit" w="50%" alignSelf="center">Create Wallet</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default WalletForm;