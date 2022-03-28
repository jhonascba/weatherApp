import styled from "styled-components";
import {
  sectionBackgroundColor,
  sectionBorderColor,
  clickedButton,
} from "../../UI/variables";
//Icons
import { IoCreate, IoTrashBinSharp } from "react-icons/io5";

export const MainStyled = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1rem;
`;

//input
export const InputStyled = styled.input`
  width: 90vw;
  height: 3rem;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 7px;
  margin: 1rem 0;
  padding: 0.5rem;  
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    max-width: 800px;
  }
`;

//card-div
export const CardSection = styled.section`
  @media screen and (min-width: 980px) {
    display: flex;
    column-gap: 5rem;
    width: 40vw;
    flex-wrap: wrap;
    justify-content: center;
  }
`

//card
export const CardStyled = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  background-color: ${sectionBackgroundColor};
  align-items: center;
  width: 90vw;
  padding: 1rem;
  margin-bottom: 1rem;
  border: solid 0.1rem ${sectionBorderColor};
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 800px;
  }

  @media screen and (min-width: 980px) {
    max-width: 350px;
  }
`;

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.3rem;

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  @media screen and (min-width: 980) {
    
  }
`;

export const DivButtons = styled.div`
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  margin-right: 1rem;

  @media screen and (min-width: 768px) {
    max-width: 750px;
  }

  @media screen and (min-width: 980px) {
    max-width: 350px;
  }
`;

export const CardButtonStyled = styled.button`
  border: none;
  background-color: inherit;
  justify-self: end;

  @media screen and (min-width: 980px) {
    max-width: 800px;
  }
`;

//Styled Icon
export const TrashIcon = styled(IoTrashBinSharp)`
  :hover {
    cursor: pointer;
    color: ${clickedButton};
  }
`
