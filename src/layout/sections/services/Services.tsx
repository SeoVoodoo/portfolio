import React from 'react';
import { Service } from './service/Service';
import { SectionTitle } from '../../../conponents/SectionTitle';
import { Container } from '../../../conponents/Container';
// import { useDevice, DeviceType } from '../../../hooks/useDevice';
import { useEffect, useState } from 'react';
import { S } from './Services_Styles';
import { Fade } from "react-awesome-reveal";

// const ICON_SIZE: Record<DeviceType, string> = {
//     'desktop': '73',
//     'tablet': '62',
//     'mobile': '35',
// }

export const Services: React.FC = () => {
    // const device = useDevice();

    const [width, setWidth] = useState(window.innerWidth);
    const tablet = 768;
    const mobile = 576;

    const handleWindowResize = () => setWidth(window.innerWidth);

    useEffect(() => {        
        window.addEventListener('resize', handleWindowResize );

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    return (
        <S.Services>
            <Container>
                <SectionTitle>Services</SectionTitle>                
                <S.ServicesList>   
                <Fade cascade={true} style={{flex: 1}} damping={0.4}>            
                        <S.ServicesItem>                                               
                            <Service 
                                title={'Video Edit Service'}
                                id={'videoPlay'}
                                // width={ICON_SIZE[device]}
                                // height={ICON_SIZE[device]}
                                width={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                height={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                viewBox={'0 0 73 73'}
                            />                        
                        </S.ServicesItem>
                    
                    
                        <S.ServicesItem>                         
                            <Service 
                                title={'Ui/Ux Designer'}
                                id={'edit'}
                                width={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                height={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                viewBox={'0 0 74 74'}
                            />                        
                        </S.ServicesItem>
                    
                        <S.ServicesItem>    
                            <Service 
                                title={'Website Developer'}
                                id={'notebook'}
                                width={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                height={width > mobile ? (width > tablet ? '73' : '62') : '35'}
                                viewBox={'0 0 73 73'}
                            />
                        </S.ServicesItem> 
                </Fade>                                              
                </S.ServicesList>
                 
            </Container>            
        </S.Services>
    );
};

