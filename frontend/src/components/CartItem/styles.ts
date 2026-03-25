import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  align-items: center;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const CartItemImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #eee;

  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #ddd;
  }
  &::before {
    transform: rotate(25deg);
  }
  &::after {
    transform: rotate(-25deg);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 1;
  }
`;

export const CartItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h4 {
    margin: 0;
    font-size: 1.1rem;
    color: #2c2c2c;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #b9b9b9;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
