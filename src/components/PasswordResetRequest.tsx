import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Input,
  Message,
  Title,
  Wrapper,
} from "../styles/shared.styled";

function PasswordResetRequest() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/forgot-password",
        { email }
      );
      setMessage(response.data.message);

      navigate("/reset-link-sent");
    } catch (error) {
      setMessage("Error requesting password reset. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Request Password Reset</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Request Reset</Button>
        </Form>
        {message && (
          <Message $error={message.includes("Error")}>{message}</Message>
        )}
      </Container>
    </Wrapper>
  );
}

export default PasswordResetRequest;
