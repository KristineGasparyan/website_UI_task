import React from 'react'
import styled from 'styled-components';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';

const PageContainer = styled.div`
    width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export function HomePage() {
    return (
        <PageContainer>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </PageContainer>
    )
}
