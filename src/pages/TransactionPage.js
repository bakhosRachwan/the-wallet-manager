import { Box } from "@chakra-ui/layout";
import ListSection from "../components/ListSection";
import TransactionForm from "../components/TransactionForm";

const TransactionPage = () => {
    return ( 
        <Box>
            <TransactionForm />
            <ListSection />
        </Box>
     );
}
 
export default TransactionPage;