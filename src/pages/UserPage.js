import { Button } from "@chakra-ui/react";
import app from "../config/Fbconfig";
import { useHistory } from "react-router-dom";
const UserPage = () => {
    const history = useHistory();
    const handleClick = () => {
        app.auth().signOut()
        history.push('/');
    }
    return ( 
        <Button onClick={handleClick}>Sign out</Button>
     );
}
 
export default UserPage;