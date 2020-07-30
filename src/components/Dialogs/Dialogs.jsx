import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (porops) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={"Sasha"} id={1} />
                <DialogItem name={"Sergey"} id={2} />
                <DialogItem name={"Dima"} id={3} />
                <DialogItem name={"Vera"} id={4} />
                <DialogItem name={"Lara"} id={5} />
                <DialogItem name={"Olga"} id={6} />
                <DialogItem name={"Sveta"} id={7} />
                <DialogItem name={"Misha"} id={8} />
            </div>
            <div className={s.messages}>
                <Message message={"Hi"} />
                <Message message={"Hellow"} />
                <Message message={"Yo"} />
            </div>
        </div>
    )
}

export default Dialogs;
