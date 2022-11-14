import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
// border: 1px solid blue;
display: flex;
width: 100%;
height: 60px;
min-width: 750px;
background-color: #191b1f;

`
export const LinkStyled = styled(Link)`
// border: 1px solid blue;
text-decoration: none;`

export const NavContainer = styled.div`
// border: 3px solid green;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-inline: auto;
width: 95%;
`

export const LeftNav = styled.div`
// border: 1px solid blue;
display: flex;
padding-left: 1rem;
flex-direction: row;
min-width: 250px;
justify-content: space-between;`

export const RightNav = styled.div`
// border: 1px solid white;
display: flex;
color: #fafbfb;
flex-direction: row;
width: 460px;
justify-content: space-between;`
