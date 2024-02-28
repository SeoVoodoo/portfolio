import waveLight from "../assets/images/waveLight.svg";
import waveDark from "../assets/images/waveDark.svg";

export const myTheme = {
    dark: {
        bg: "#222222",
        bgElement: "#24335C",
        bgImage: "linear-gradient(to right, #24335C 30%, #222222 30%)",
        bgImageTablet: "linear-gradient(to right, #24335C 50%, #222222 50%)",
        gradient: "linear-gradient(147deg, rgba(57, 57, 57, 0.50) -6.76%, rgba(0, 66, 255, 0.05) 102.96%)",
        gradientTablet: "linear-gradient(132.42deg, rgba(57, 57, 57, 0.5) -6.404%,rgba(0, 66, 255, 0.05) 102.81%)",
        colors: {
            link: "#FFFFFF",
            h2: "#FFFFFF",
            h3: "#FFFFFF",            
            border: "rgba(71, 71, 71, 0.3)",
            text: "#FFFFFF",
            wrapper: "#353535",
            wrapHover: "#24335C",
            btn: "#FFFFFF",
            btnAncor: "#353535",
            btnAncorHover: "#FFFFFF",
            prevLink: "#A6BCFA",
            particle: "#FFFFFF",
            tabs: {
                color: "#FFFFFF",
                bgColor: "#222222",
                bgColorHover: "#24335C",
                border: "#4C546C",
                borderHover: "#24335C"
            },
            services: {
                cardBg: "#2c2b2b",
                h3: "#FFFFFF"
            },
            contact: {
                formBg: "#2c2b2b",
                h3: "#FFFFFF",
                h4: "#FFFFFF",
                inputBg: "#393838",
                inputColor: "#FFFFFF"               
            },
            footer: {
                bgColor: "#24335C",
                bg: `url(${waveDark})`
            }           
        },
        media: {
            tablet: "screen and (max-width: 768px)",
            mobile: "screen and (max-width: 576px)"
        },
        animations: {
            transition: "0.2s ease-in-out" 
        }
    },
    light: {
        bg: "#FFFFFF",
        bgElement: "#A5BBF8",
        bgImage: "linear-gradient(to right, #A6BCFA 30%, #FFFFFF 30%)",
        bgImageTablet: "linear-gradient(to right, #A6BCFA 50%, #FFFFFF 50%)",
        gradient: "linear-gradient(147deg, rgba(255, 255, 255, 0.50) -6.76%, rgba(0, 71, 255, 0.05) 102.96%)",
        gradientTablet: "linear-gradient(132.42deg, rgba(255, 255, 255, 0.5) -6.404%,rgba(0, 71, 255, 0.05) 102.81%)",
        colors: {
            link: "#393939",
            h2: "#000000",
            h3: "#2157F2",            
            border: "#FFFFFF",
            text: "#393939",
            wrapper: "#F9F9FC",
            wrapHover: "#A6BCFA",
            btn: "#2157F2",            
            btnAncor: "#FFFFFF",
            btnAncorHover: "#A6BCFA",
            prevLink: "#2157F2",
            particle: "#222222",
            tabs: {
                color: "#1F1F1F",
                bgColor: "#F8FAFF",
                bgColorHover: "#A6BCFA",
                border: "#A6BCFA",
                borderHover: "#A6BCFA"
            },
            services: {
                cardBg: "#FFFFFF",
                h3: "#000000",
            },
            contact: {
                formBg: "#FFFFFF",
                h3: "#000000",
                h4: "#000000",
                inputBg: "#F5F5F5",
                inputColor: "#000000"                
            },
            footer: {
                bgColor: "#A5BBF8",
                 bg: `url(${waveLight})`
            }
        },
        media: {
            tablet: "screen and (max-width: 768px)",
            mobile: "screen and (max-width: 576px)"
        },
        animations: {
            transition: "0.2s ease-in-out" 
        }
         
    }
    // media: {
    //     tablet: "screen and (max-width: 768px)",
    //     mobile: "screen and (max-width: 576px)"
    // }
    
} 