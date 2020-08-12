import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialogsItemsWrap}>
            <div className={s.avatar}>
                <img src="https://steamuserimages-a.akamaihd.net/ugc/862863922320868372/F5F39ED5D2D9AAB83BE5B7CDE9F21E91F9075C13/" alt="avatar" />
            </div>
            <div className={s.dialogsItems + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
};

export default DialogItem;
