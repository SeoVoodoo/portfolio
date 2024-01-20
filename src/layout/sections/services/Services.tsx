import React from 'react';
import styled from 'styled-components';
import { Service } from './service/Service';
import { SectionTitle } from '../../../conponents/SectionTitle';

export const Services = () => {
    return (
        <StyledServices>
            <SectionTitle>Services</SectionTitle>
            <ServicesList>
                <ServicesItem>
                    <Service 
                        title={'Video Edit Service'}
                        id={'videoPlay'}
                        width={'73'}
                        height={'73'}
                        viewBox={'0 0 73 73'}
                    />
                </ServicesItem>
                <ServicesItem>    
                    <Service 
                        title={'Ui/Ux Designer'}
                        id={'edit'}
                        width={'74'}
                        height={'74'}
                        viewBox={'0 0 74 74'}
                    />
                </ServicesItem>
                <ServicesItem>    
                    <Service 
                        title={'Ui/Ux Designer'}
                        id={'notebook'}
                        width={'73'}
                        height={'73'}
                        viewBox={'0 0 73 73'}
                    />
                </ServicesItem>
            </ServicesList>            
        </StyledServices>
    );
};

const StyledServices = styled.section`
    background-color: ${({theme}) => theme.bg};
    min-height: 50vh;
    /* width: 100%;
    margin: 0 auto; */
`
const ServicesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    justify-content: center;
`
const ServicesItem = styled.li`
    
`