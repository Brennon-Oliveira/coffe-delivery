import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme["max-width"]};
  width: 100%;
  padding: 0 2%;
  margin: 0 auto;
`;

export const OurCoffeesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
