import styled from "styled-components";

import ReactPlayer from "react-player";

export const DisplayAvailability = styled.div`
    width:100%;
    display: ${(props) => props.display};
`;

export const VideoContainer = styled.div`
    position: relative;
    padding-top: 56.25%;
    
    

`;

export const VideoPlayer = styled(ReactPlayer)`
    position: absolute;
    top:0;
    left:0;
  

    

`;

export const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color:${(props) => props.theme.secondaryBackground};
`

