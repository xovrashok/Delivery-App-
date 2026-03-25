import styled from "styled-components";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const ShopsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 15px;
  margin: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  height: 100vh;
`;

export const ProductsContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  margin: 10px;
  padding: 24px;
`;

export const FilterContainer = styled.div`
  padding: 0 20px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
`;

export const FilterSelect = styled.select`
  max-width: 120px;
  padding: 5px;
  border-radius: 5px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  gap: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
