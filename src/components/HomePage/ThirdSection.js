import React from 'react';
import { Element } from "react-scroll";
import { BestSellers } from '../../components/BestSellers';
import { SectionContainer, ImageDiv, Button } from '../../components/commonStyledComponents';

//IMAGES--------
import cakeOfTheDay from '../../images/cakeOfTheDay.svg';
import group3 from '../../images/group3.svg';

export const ThirdSection = () => {
    return (
        <Element name="thirdSection">
            <SectionContainer overflow="hidden" position="relative" height="115vh">
                <ImageDiv width="633px" height="637px" left="404px" top="-130px" src={cakeOfTheDay} />
                <Button width="350px" left="545px" top="500px" onClick={() => void 0}>Заказать сейчас</Button>
                <ImageDiv width="879px" height="797px" left="768px" top="300px" src={group3} index={-1} />
                <BestSellers />
            </SectionContainer >
        </Element>
    )
}