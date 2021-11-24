import styled from "styled-components";
export const PageButton = styled.div`
  height: 30px;
  padding:5px 10px;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:10px;
  background-color: ${(props) =>
        props.active ? props.theme.primaryColor : "#404040"};
  color: ${(props) =>
        props.active
            ? props.theme.textColorPrimary
            : props.theme.textColorSecondary};

  &:hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.textColorPrimary};
  }


`;

export const PaginationContainer = styled.div`
  display: flex;
  margin:10px 0;
  justify-content: flex-end;
  align-items: center;
  
`;
export const PageNumber = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin-right:10px;
`;