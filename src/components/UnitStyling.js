import styled from 'styled-components';

export const UnitStyling = styled.div`
place-self: end;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
opacity: .8;

:hover {
    opacity: 1;
}
`;

export const Toggle = styled.button`
cursor: pointer;
width: 4em;
border: 3px double;
background: transparent;
padding: 0;
margin: 0 1em;
border-radius: 100vmax;

::after {
    content: '';
    display: block;
    height: 1rem;
    margin: 3px;
    width: 1rem;
    border-radius: 50%;
    margin-left: ${(props) => (props.metric ? '2px' : 'auto')};
}
`;