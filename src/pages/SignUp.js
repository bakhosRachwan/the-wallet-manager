import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../config/Fbconfig";
import { Input, Stack, Text, Button, Box } from "@chakra-ui/react";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Box h="90%" p="2" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Text>Sign up</Text>
      <form onSubmit={handleSignUp}>
        <Stack>
            <Text>
            Email
            <Input name="email" type="email" placeholder="Email" />
            </Text>
            <Text>
            Password
            <Input name="password" type="password" placeholder="Password" />
            </Text>
            <Button type="submit">Sign Up</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default withRouter(SignUp);