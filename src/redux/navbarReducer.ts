import {ActionType, NavbarType} from "./store";

let initialState = {
    friendsCountData: [
        {id: 1, src: "https://schoolsw3.com/w3images/avatar6.png", name: "Serega"},
        {
            id: 2,
            src: "https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj",
            name: "Marina"
        },
        {id: 1, src: "https://html5css.ru/w3images/avatar2.png", name: "Dima"},
    ]
}

export const navbarReducer = (state: NavbarType = initialState, action: ActionType) => {

    return state
}
