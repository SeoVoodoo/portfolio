import { styled } from "styled-components"

// Services

const Services = styled.section`
    position: relative;
    background-color: ${({theme}) => theme.bg};
`
const ServicesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    @media ${({theme}) => theme.media.tablet }{
        li:nth-of-type(1){
            order: 3;
        }
        gap: 25px;
    }

    @media ${({theme}) => theme.media.mobile }{
        gap: 15px;
    }
`
const ServicesItem = styled.li`
    max-width: 334px; 
       
    width: 100%;
    height: 402px;
    padding: 115px 0 45px 60px;
    /* flex-shrink: 2; */
    /* flex-grow: 1;     */
    
    background-color: ${({theme}) => theme.colors.services.cardBg};
    box-shadow: 0px 15px 29px 0px rgba(0, 0, 0, 0.05);   

    @media ${({theme}) => theme.media.tablet }{ 
        max-width: 280px;        
        height: 338px;
        padding: 90px 0 38px 50px;        
    }     

    @media ${({theme}) => theme.media.mobile }{ 
        max-width: 155px;        
        height: 187px;
        padding: 55px 0 20px 27px;        
    }
`

// Service

const Service = styled.div`
  
`

const Title = styled.h3`
    max-width: 150px;
    color: ${({theme}) => theme.colors.services.h3};
    font-size: 32px;
    font-weight: 600;
    line-height: 125%;  
    margin: 25px 0 30px; 

    @media ${({theme}) => theme.media.tablet }{              
        font-size: 27px;
        margin: 18px 0 16px;
    }

    @media ${({theme}) => theme.media.mobile }{  
        max-width: 70px;      
        font-size: 15px;
        margin: 8px 0 2px;
    } 
`

const Link = styled.a`
    padding: 6px 0;
    color: rgba(33, 87, 242, 1);
    line-height: 196%;
    transition: padding 0.5s ease;

    display: flex;
    width: 150px;            
    align-items: center;
    gap: 15px;

    &:hover {
        border-radius: 20px;        
        box-shadow: 0px 0px 10px 2px rgba(33, 87, 242, 1) inset;        
        padding-left: 20px;
    }

    @media ${({theme}) => theme.media.mobile }{        
        font-size: 11px;
    }
`

export const S = {
    Services,
    ServicesList,
    ServicesItem,
    Service,
    Title,
    Link
}