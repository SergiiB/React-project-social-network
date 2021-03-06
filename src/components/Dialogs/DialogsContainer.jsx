import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    };
                    let onNewMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextCreator(text));
                    };

                    return (
                        <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick}
                                 dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;