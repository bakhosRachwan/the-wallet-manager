import { Box } from "@chakra-ui/layout";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransactionPage from "./pages/TransactionPage";
import WalletForm from "./components/WalletForm";
function App() {
  return (
    <Router>
      <Box className="App" width="100%" height="100vh" p="8">
      <Navbar />
      <Route exact path="/" component={ WalletForm }/> 
      <Route exact path="/transaction/:name" component={ TransactionPage }/> 
      </Box>
    </Router>
  );
}

export default App;
