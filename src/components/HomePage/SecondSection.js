import React from 'react'
import { Element } from "react-scroll";
import Card from '../Card';
import { SectionContainer, Paragraph, scrollToNextSection, Arrow, NextSection, GlobalStyles, ImageDiv } from '../commonStyledComponents';
import { IMAGES, ICONS } from '../../components/constants';
//IMAGES-----
import group2 from '../../images/group2.svg'
import arrow2 from '../../images/arrow2.svg'

const getCards = (items, isIcons) => {
    const length = items.length;
    return (
        <div className="card-section">
            {
                items.map((item, index) => (
                    <Card key={index} item={item} length={length} isIcons={isIcons} index={index} />
                ))
            }
        </div>
    )
}

export const SecondSection = () => {
    return (
        <Element name="secondSection">
            <SectionContainer height="105vh">
                {getCards(IMAGES)}
                {getCards(ICONS, true)}
                <ImageDiv width="310px" height="391px" top="1550px" src={group2} />
                <GlobalStyles />
                <NextSection left="20%" top="1820px">
                    <Arrow onClick={() => scrollToNextSection("thirdSection")} src={arrow2} marginLeft="210px" />
                    <Paragraph width='350px' float='left' size="48px" height="54px">Торт дня</Paragraph>
                </NextSection>
            </SectionContainer >
        </Element>
    )
}
