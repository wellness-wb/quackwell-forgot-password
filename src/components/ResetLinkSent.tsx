import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  max-width: 400px;
  margin: auto;
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const BackLink = styled(Link)`
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

function ResetLinkSent() {
  return (
    <Container>
      <Message>A reset link has been sent to your email.</Message>
      <BackLink to="/request-reset">Go back to Reset Password Page</BackLink>
    </Container>
  );
}

export default ResetLinkSent;
