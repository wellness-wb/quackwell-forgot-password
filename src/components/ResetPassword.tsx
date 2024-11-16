import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Input,
  Message,
  Title,
  Wrapper,
} from "../styles/shared.styled";

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/reset-password",
        {
          token,
          newPassword,
        }
      );
      setMessage(response.data.message);
      navigate(`/reset-password-confirmation/${response.data.message}`);
    } catch (error) {
      setMessage("Error resetting password. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>Reset Password</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Button type="submit">Reset Password</Button>
        </Form>
        {message && (
          <Message $error={message.includes("Error")}>{message}</Message>
        )}
      </Container>
    </Wrapper>
  );
}

export default ResetPassword;
