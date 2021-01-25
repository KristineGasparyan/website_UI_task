import styled, { createGlobalStyle } from 'styled-components';
import { scroller } from "react-scroll";

export const GlobalStyles = createGlobalStyle`
    font-family: Comfortaa;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    color: #032E3C;
`

export const ImageDiv = styled.div`
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    left: ${props => props.left};
    top: ${props => props.top};
    background-image: url(${props => props.src});
    z-index: ${props => props.index};
`

export const Paragraph = styled.p`
    font-size: ${props => props.size};;
    line-height: ${props => props.height};
    width: ${props => props.width};
    float: ${props => props.float};
`



export const Button = styled.button`
    position: absolute;
    width: ${props => props.width};
    height: 82px;
    left: ${props => props.left};
    top: ${props => props.top};
    background: #032E3C;
    color: #FFFFFF;
    font-size: 28px;
    line-height: 31px;
    cursor: pointer;
    z-index: 1;
`

export const NextSection = styled.div`
    position: absolute;
    width: 550px;
    height: 160px;
    margin-left: ${props => props.left};
    top:  ${props => props.top};
`

export const Arrow = styled.div`
    position: absolute;
    height: 165px;
    width: 165px;
    margin-top: -40px;
    margin-left: ${props => props.marginLeft};
    background-image:  url(${props => props.src});
    cursor: pointer;
`

export const scrollToNextSection = (sectionName) => {
    scroller.scrollTo(sectionName, { smooth: true });
}

export const SectionContainer = styled.div`
    overflow: ${props => props.overflow};
    position: ${props => props.position};
    margin: 0 auto;
    width: 1440px;
    height: ${props => props.height};
`