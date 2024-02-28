import styled from "styled-components";
import { Icon } from "../icon/Icon";
// import telegram from "../../assets/images/telegramm.svg"

type SocialItemPropsType = {
    link?: string,
    id: string,
    width?: string,
    height?: string,
    viewBox?: string
    src?: string
}


export const SocialItem = (props: SocialItemPropsType) => {
    return (        
            <StyledSocialItem>
                {/* <div><img src={props.src} alt="#" /></div> */}
                <SocialLink href={props.link}>
                    <Icon 
                        id={props.id} 
                        width={props.width} 
                        height={props.height} 
                        viewBox={props.viewBox}                    
                    />
                </SocialLink>
            </StyledSocialItem>
    );
};

const StyledSocialItem = styled.li`    
    
`
const SocialLink = styled.a`   
    
`


// return (
//     <SocialList>
//         <SocialItem>
//             <SocialLink href={"#"}>
//                 <Icon 
//                     id={"whatsap"} 
//                     width={"26"} 
//                     height={"26"} 
//                     viewBox={"0 0 26 26"}                    
//                 />
//             </SocialLink>
//         </SocialItem>
//         <SocialItem>
//             <SocialLink href={"#"}>            
//                 <Icon 
//                     id={"instagramm"} 
//                     width={"26"} 
//                     height={"26"} 
//                     viewBox={"0 0 26 26"}                    
//                 />
//             </SocialLink>
//         </SocialItem>
//         <SocialItem>
//             <SocialLink href={"#"}>
//                 <Icon 
//                     id={"vector"} 
//                     width={"26"} 
//                     height={"26"} 
//                     viewBox={"0 0 26 26"}                    
//                 />
//             </SocialLink>
//         </SocialItem>
//     </SocialList>
// );
