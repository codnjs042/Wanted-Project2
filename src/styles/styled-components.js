import styled from 'styled-components';

export const StyledBody = styled.div`
display: flex;
height: 100vh;
width: 100vw;
background-color: LightGray;
justify-content: center;
align-items: center;
`;

export const StyledCard = styled.div`
background-color: white;
border: 1vh solid;
padding: 5vh;

& > div {
    display: flex;
    gap: 3vw;
}
`;

export const StyledInput = styled.input`
flex: 1;
width: 20vw;
border: 0.5vh solid;
font-size: 3vw;
text-align: center;
`;

export const StyledSelect = styled.select`
flex: 1;
width: 20vw;
border: 0.5vh solid;
font-size: 3vw;
`;

export const StyledTab = styled.div`
border: 0.5vh solid;
display: flex;
flex-direction: column;
margin-top: 3vw;

& > div {
    display: flex;
    flex-direction: row;
}

& > #tab > div {
    flex: 1;
    border: 0.25vh solid; 
    font-size: 2vw;
    text-align: center;
}

& > #rslt {
    flex-direction: column;
    padding-inline: 4vw;
    margin-top: -2vw;
    margin-bottom: 10vw;
    
}

& > #rslt > p {
    font-size: 3vw;
}
`;