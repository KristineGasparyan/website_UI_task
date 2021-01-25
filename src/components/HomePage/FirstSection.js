import React from 'react'
import Title from './Title';
import styled from 'styled-components';
import { Element } from "react-scroll";
import { GlobalStyles, SectionContainer, ImageDiv, Paragraph, Button, NextSection, Arrow, scrollToNextSection } from '../../components/commonStyledComponents';

//IMAGES..............
import mainCake from '../../images/mainCake.svg'
import arrow1 from '../../images/arrow1.svg';
import group1 from '../../images/group1.svg';


const paragraph = 'Здесь есть все твои любимые торты';

const FirstSectionWrapper = styled.div`
     /* width: 1440px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  left: 0px;
  top: 0px;
  background-color: #ffffff;
`

const FirstScreen = styled.div`
    position: absolute;
    width: 1083px;
    height: 981px;
    left: 0px;
    top: 93px;
`

const ParagraphDiv = styled.div`
    position: absolute;
    width: 298px;
    height: 266px;
    left: 785px;
    top: 204px;
    word-wrap: break-word;
    text-align:center;
    z-index: 1;
`

export function FirstSection() {
    return (
        <Element name="firstSection">
            <SectionContainer overflow="hidden" position="relative" height="105vh">
                <Title />
                <FirstSectionWrapper>
                    <GlobalStyles />
                    <FirstScreen>
                        <ImageDiv width="715px" height="981px" src={mainCake} />
                        <ParagraphDiv>
                            <Paragraph size="58px" height="65px"> {paragraph} </Paragraph>
                        </ParagraphDiv>
                        <Button width="296px" left="786px" top="510px" onClick={() => void 0}>Заказать</Button>
                        <ImageDiv width="1535px" height="1609px" left="665px" top="-100px" src={group1} />
                        <NextSection left="75%" top="700px">
                            <Arrow onClick={() => scrollToNextSection("secondSection")} src={arrow1} />
                            <Paragraph width='350px' float='right' size="48px" height="54px">Выбери раздел</Paragraph>
                        </NextSection>
                    </FirstScreen>
                </FirstSectionWrapper>
            </SectionContainer>
        </Element>
    )
}

// export { FirstSection };
