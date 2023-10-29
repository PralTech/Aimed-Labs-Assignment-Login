import React, { useState } from 'react';
import undrawimage from './img/undrawimage.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  Container,
  LeftPanel,
  Image,
  RightPanel,
  Form,
  H2,
  Label,
  Input,
  InputContainer,
  PasswordInput,
  PasswordToggle,
  CheckboxContainer,
  Checkbox,
  ChangePasswordLink,
  Button,
  RegisterLink,
  StyledSpan
} from './StyledComponents';

function AimedLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [loginId, setLoginId] = useState('');
  const [remember, setRemember] = useState(false); 
  const [terms, setTerms] = useState(false); 

  // ****************function for password visibility ***************** 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // ********************* function for  formdata submit *************  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login ID:', loginId);
    console.log('Password:', password);
    // ************************Reseting form fields***********
    setLoginId('');
    setPassword('');
    setRemember(false);
    setTerms(false);
  };

  return (

    <Container>
      <LeftPanel>
        <Image src={undrawimage} alt="LoginImage" />
      </LeftPanel>

      <RightPanel>
        <Form onSubmit={handleSubmit}>
          <H2>Login</H2>
          <Label htmlFor="loginId">Login ID</Label>
          <Input
            type="text"
            id="loginId"
            name="loginId"
            value={loginId}
            placeholder="Enter Login ID"
            required
            onChange={(e) => setLoginId(e.target.value)}
          />

          <Label htmlFor="password">Password</Label>
          <InputContainer>
            <PasswordInput
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Enter Password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordToggle onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </PasswordToggle>
          </InputContainer>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="remember"
              name="remember"
              checked={remember}
              required
              onChange={() => setRemember(!remember)}
            />
            <Label htmlFor="remember">Remember me</Label>
            <ChangePasswordLink href="/password">
              Change Password
            </ChangePasswordLink>
          </CheckboxContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              id="terms"
              name="terms"
              checked={terms}
              required
              onChange={() => setTerms(!terms)}
            />
            <Label htmlFor="terms">
              Agree to the <a href="/terms-conditions"
               style={{ color: '#F78719' }}>Terms and Conditions</a>
            </Label>
          </CheckboxContainer>

          <Button type="submit">Login</Button>
          <RegisterLink href="/register">
            Don't have an account? <StyledSpan>Register Here</StyledSpan>
          </RegisterLink>
        </Form>
      </RightPanel>
    </Container>
  );
}

export default AimedLogin;
