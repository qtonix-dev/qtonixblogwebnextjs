import cookie from 'react-cookies'

export const changeTheme = data => async dispatch => {
    cookie.save('themetype121212', data)
    dispatch({type:'CHANGE_THEME',payload:data})
}