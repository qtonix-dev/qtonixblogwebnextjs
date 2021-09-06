export const blogReducer = (state = null, action) => {
    switch(action.type){
        case 'GET_ALL_BLOGS':
            return action.payload
        default:
            return state;
    }
}

export default blogReducer;