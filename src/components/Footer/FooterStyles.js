import Link from "next/link";
import styled from "styled-components";
export const FooterContainer = styled.div`
  margin-top: 20px;
  background: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.textColorSecondary};
`;

export const FooterContentContainer = styled.div`
  height: 100%;
  padding: 20px 0;

  @media (max-width: 580px) {
    text-align: center;
  }
`;

export const FooterDescription = styled.p`
  color: ${(props) => props.theme.textColorSecondary};
  font-size: 1.2rem;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
`;
export const FooterLinks = styled.ul``;
export const FooterLink = styled.li`
  cursor: pointer;
`;

export const LetterContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  background-color: ${(props) => props.theme.secondaryBackground};
  grid-gap: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
`;
export const Letters = styled(Link)`
  display: grid;
  place-items: center;
  padding: 5px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColorSecondary};
  background-color: ${(props) => props.theme.mainBackground};
  cursor: pointer;
`;

export const Letter = styled.p`
  display: grid;
  place-items: center;
  padding: 5px;
  border-radius: 5px;
  color: ${(props) => props.theme.textColorSecondary};
  background-color: ${(props) => props.theme.mainBackground};
  cursor: pointer;
`;
