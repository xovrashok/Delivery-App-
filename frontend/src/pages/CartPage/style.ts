import styled from "styled-components";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 40px;
  border: 1px solid grey;
  margin: 10px border-r;
  margin: 15px;
  border-radius: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
`;

export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding-right: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  width: -webkit-fill-available;
  padding: 10px;
  border-radius: 10px;
  border: ${(props) => (props.$hasError ? "2px solid #ff4d4d" : "none")};
  font-size: 16px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  padding: 100px 20px;
  color: #888;

  h2 {
    color: #333;
    margin-bottom: 10px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const TotalTitle = styled.h3`
  font-size: 1.4rem;
  color: white;
`;
