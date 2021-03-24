import { Box, Text, Input, Stack, Button } from "@chakra-ui/react"

const TransactionForm = () => {
    return (
        <Box background="red" p="2" w="50%">
            <form>
                <Stack spacing="4">
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" w="75%" justifyContent="space-between">
                            <Text>Transaction</Text>
                            <Input type="number" min={0} w="75%" placeholder="Enter Transaction" />
                        </Box>
                        <Box display="flex" w="75%" justifyContent="space-between">
                            <Text>Type</Text>
                            <Input w="75%" />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Box display="flex" justifyContent="space-between" w="75%" >
                            <Text>Notes</Text>
                            <Input type="text" w="75%" placeholder="Enter Notes" />
                        </Box>
                        <Box display="flex" w="75%" justifyContent="space-between">
                            <Text>Tags</Text>
                            <Input type="text" w="75%" placeholder="Enter Related Tags" />
                        </Box>
                    </Box>
                    <Button type="submit" w="25%" alignSelf="center" >Submit</Button>
                </Stack>
            </form>
        </Box>
    );
}

export default TransactionForm;