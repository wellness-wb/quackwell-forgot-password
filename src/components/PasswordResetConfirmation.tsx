import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
`;

function PasswordResetConfirmation() {
  const { result } = useParams();

  return (
    <Container>
      <Title>Password Reset Status</Title>
      <Message>{result}</Message>
    </Container>
  );
}

export default PasswordResetConfirmation;
