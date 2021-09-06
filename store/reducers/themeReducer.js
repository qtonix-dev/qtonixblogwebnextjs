import cookie from 'react-cookies'

export const themeReducer = (state = 'today', action) => {

    const ISSERVER = typeof window === "undefined";

        if(!ISSERVER) {
        // Access localStorage
            if(cookie.load('themetype121212')===undefined) {
            }else{
            state = cookie.load('themetype121212');
            }
        }



    switch(action.type){
        case 'CHANGE_THEME':
            return action.payload
        default:
            return state;
    }
}

export default themeReducer;