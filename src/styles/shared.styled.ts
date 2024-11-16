import styled from "styled-components";

// Outer Wrapper to center the Container
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  background-color: #f0f2f5; /* Optional: background color for the whole screen */

  /* Mobile adjustments */
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

// Inner Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  max-width: 350px;
  width: 100%; /* Makes it responsive */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.h2`
  margin-bottom: 10px; /* Reduced margin */
  color: #333;
  font-size: 1.4rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px; /* Reduced gap */
  margin-bottom: 10px; /* Less space after form */
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 8px 12px;
  font-size: 15px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const Message = styled.p<{ $error?: boolean }>`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ $error }) => ($error ? "red" : "green")};

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
