import { Box, Button, Container, Stack, TextField } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "./style.css";


const usernameReducer = (state, action) => {
  if (action.type === 'USERNAME_INPUT_CHANGE') {
    return{value: action.payload, isValid: action.payload.trim().length !== 0}  
  }
  if (action.type === 'USERNAME_INPUT_BLUR') {
    return{value: state.value, isValid: state.value.trim().length !== 0}
  }
  return { value: '', isValid: false };
}

const passwordReducer = (state, action) => {
  if (action.type === 'PASSWORD_INPUT_CHANGE') {
    return{value: action.payload, isValid: action.payload.trim().length !== 0}
  }
  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return{value: state.value, isValid: state.value.trim().length !== 0}
  }
  return { value: '', isValid: false };
}

function LoginForm(props) {

  //validate
  const [formIsValid, setFormIsValid] = useState(false);

  const [usernameState, usernameDispatcher] = useReducer(usernameReducer, { value: '', isValid: null});
  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, { value: '', isValid: null});

  useEffect(() => {
    setFormIsValid(usernameState.isValid && passwordState.isValid);
    return (() => {
    });
    
  }, [usernameState, passwordState]);

  const userNameChangeHandler = (event) => {
  //  setUsername(event.target.value);
    usernameDispatcher({type: 'USERNAME_INPUT_CHANGE', payload: event.target.value});
   // setFormIsValid(event.target.value.trim().length !== 0 && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
   // setPassword(event.target.value);
   passwordDispatcher({type: 'PASSWORD_INPUT_CHANGE', payload: event.target.value});
    //setFormIsValid(event.target.value.trim().length !== 0 && usernameState.isValid);
  }

  const validateUsernameHandler = () => {
  //  setIsValidUsername(username.trim().length !== 0);
    usernameDispatcher({ type: 'USERNAME_INPUT_BLUR' });
  }

  const validatePasswordHandler = () => {
    //setIsValidPassword(password.trim().length !== 0);
   passwordDispatcher({ type: 'PASSWORD_INPUT_BLUR' });
  }


  const submitHandler = (event) => {
    event.preventDefault();

    // onLogin truyen tu function LoginForm
    props.onLogin(usernameState.value, passwordState.value);

   // setUsername('');
  //  setPassword('');
  };

  return (
    
    <Container sx={{ width: '30%' }} className='form-control'>
      <form onSubmit={submitHandler}>
        <Stack spacing={2} pt={5} margin='dense'>
          <label>Form Login</label>
          <TextField
            error={usernameState.isValid === false}
            id='form-username'
            label='Username'
            variant="outlined"
            onChange={userNameChangeHandler}
            value={usernameState.value}
            onBlur={validateUsernameHandler}
            helperText={`Please enter username`}
          />
            <TextField
            error={passwordState.isValid === false}
            id='form-password'
            label='Password'
            variant="outlined"
            onChange={passwordChangeHandler}
            value={passwordState.value}
            type='password'
            onBlur={validatePasswordHandler}
            helperText={`Please enter password`}
         />
        </Stack>

        <Box pt={2} display="flex" justifyContent="center" alignItems="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            margin="dense"
            disabled={!formIsValid}
          >Login</Button>
        </Box>
      </form>
      </Container>
  );
}

export default LoginForm;
