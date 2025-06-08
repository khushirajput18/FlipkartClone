import { Box, Button, Dialog, styled, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../context/Dataprovider";
import authenticateLogin from "../../service/api";

// Styled Components
const Component = styled(Box)`
  height: 70vh;
  width: 60vw;
`;

const Image = styled(Box)`
  background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
  height: 80%;
  width: 28%;
  padding: 45px 35px;
  color: white;
  font-weight: 600;
`;
const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 5px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const LoginDialog = ({ open, setOpen }) => {
  const accountInitialValue = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist, and Recommendations",
    },
    signup: {
      view: "signup",
      heading: "Looks like you're new here!",
      subHeading: "Sign up with your mobile number to get started",
    },
  };

  const signupInitialValue = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    phone: "",
  };
  const loginInitialValue = {
    username: "",
    password: "",
  };

  const [account, toggleAccount] = useState(accountInitialValue.login);
  const [signup, setSignup] = useState(signupInitialValue);
  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(loginInitialValue);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const validateSignup = () => {
    const { firstname, lastname, email, username, password, phone } = signup;

    if (!firstname || !lastname || !email || !username || !password || !phone) {
      alert("All fields are required!");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const signupUser = async () => {
    if (!validateSignup()) return;

    try {
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signup),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('User created successfully:', result);
        setAccount(signup.firstname);
        setSignup(signupInitialValue);
        handleClose();
      } else {
        console.error('Signup failed:', result);
        alert(result.error || 'Something went wrong during sign-up!');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('There was an error during sign-up. Please try again.');
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response=await authenticateLogin(login);
    console.log("Login data being sent:", login);

    console.log(response);
    if (response.status ===200) {
      handleClose();
      setAccount(response.data.data.firstname);
    }
    else{
      setError(true)
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>

          {account.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Username" name="username" onChange={onValueChange} />
              {error && <Error>Please enter valid Username or Password</Error>}
              <TextField variant="standard" label="Enter Your Password" type="password" name="password" onChange={onValueChange} />
              <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" label="Enter First Name" name="firstname" onChange={onInputChange} />
              <TextField variant="standard" label="Enter Your Last Name" name="lastname" onChange={onInputChange} />
              <TextField variant="standard" label="Enter Your User Name" name="username" onChange={onInputChange} />
              <TextField variant="standard" label="Enter Your Email" name="email" onChange={onInputChange} />
              <TextField variant="standard" label="Enter Password" name="password" onChange={onInputChange} />
              <TextField variant="standard" label="Enter Your Phone Number" name="phone" onChange={onInputChange} />
              <LoginButton onClick={signupUser}>Sign Up</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
