import React, { Component } from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { BEST_SELLER_CAKES } from './constants';
import ShopCard from './ShopCard';

import "pure-react-carousel/dist/react-carousel.es.css";
import styled from 'styled-components';

import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';


const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100%;
`
const ButtonBackStyled = styled(ButtonBack)`
    background-image:  url(${leftArrow});
    width: 60px;
    height: 60px;
    float: left;
    background-color: #fff;
    border: none;
`
const ButtonNextStyled = styled(ButtonNext)`
    background-image:  url(${rightArrow});
    width: 60px;
    height: 60px;
    float: right;
    background-color: #fff;
    border: none;
`
export class BestSellers extends Component {
    render() {
        return (
            <>
                <div className="bestsellers-container">
                    <StyledCarouselProvider naturalSlideWidth={200} naturalSlideHeight={320} totalSlides={8} visibleSlides={5}>
                        <Slider>
                            {
                                BEST_SELLER_CAKES.map((item, index) => (
                                    <Slide index={index}>
                                        <ShopCard item={item} />
                                    </Slide>
                                ))
                            }
                        </Slider>
                        <ButtonBackStyled />
                        <ButtonNextStyled />
                    </StyledCarouselProvider>
                </div>
            </>
        )
    }
}

export default BestSellers
