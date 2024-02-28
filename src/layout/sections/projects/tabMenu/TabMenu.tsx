import React from "react";
import { S } from "./TabMenu_Styles";


export type TabsStatusType = "story"|"post"|"banner"|"trailer"|"desighn"|"more"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (value: TabsStatusType) => void
    curentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((obj: {status: TabsStatusType, title:string}, index : number) => {

                    return <S.ListItem key={index}>
                            <S.TabBtn
                                active={props.curentFilterStatus === obj.status}
                                onClick={() => {props.changeFilterStatus(obj.status)}}>{obj.title}
                            </S.TabBtn>
                        </S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    );
}