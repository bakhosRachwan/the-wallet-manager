import { Box } from "@chakra-ui/layout";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import TransactionPage from "./pages/TransactionPage";
import WalletForm from "./components/WalletForm";
import { AuthProvider } from "./config/Auth";
import  PrivateRoute from "./config/PrivateRoute";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Box className="App" width="100%" height="100vh" p="8">
        <Navbar />
        <Route exact path="/signup" component={ SignUp } />
        <Route exact path="/login" component={ Login } />
        <PrivateRoute exact path="/" component={ WalletForm }/> 
        <Route exact path="/transaction/:name" component={ TransactionPage }/> 
        <Route exact path="/user/:name" component={ UserPage }/> 
        </Box>
      </Router>
    </AuthProvider>
  );
}

export default App;
