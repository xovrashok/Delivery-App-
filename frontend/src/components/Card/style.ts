import styled from "styled-components";

export const CardComponent = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  width: 100%;
  max-width: 300px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

export const CardImage = styled.div`
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

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: "Inter", sans-serif;
`;

export const CardPrice = styled.span`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;
