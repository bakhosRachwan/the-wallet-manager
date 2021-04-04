import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../config/Fbconfig";
import { AuthContext } from "../config/Auth";
import { Input, Stack, Text, Button, Box } from "@chakra-ui/react";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Box h="90%" p="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Text>Log in</Text>
      <form onSubmit={handleLogin}>
      <Stack spacing={2}>
        <Text>
          Email
          <Input name="email" type="email" placeholder="Email" />
        </Text>
        <Text>
          Password
          <Input name="password" type="password" placeholder="Password" />
        </Text>
        <Button type="submit">Log in</Button>
      </Stack>
      </form>
    </Box>
  );
};

export default withRouter(Login);