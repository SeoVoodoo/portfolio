
type FontPropsType = {
    family?: string,
    weight?: number,    
    lineHeight?: number,
    Fmax?: number,
    Fmin?: number
}

export const font = ({family, weight, lineHeight, Fmax, Fmin}: FontPropsType) =>`
    font-family: ${family || 'Roboto'};
    font-weight: ${weight || 400};
    line-height: ${lineHeight || 1.36};
    font-size: calc( (100vw - 320px)/(1920 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`