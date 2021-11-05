import { POST_ACTIONS } from '../actionTypes';

const initialState = {
    posts:[],
    loading:true
}

export default function postActions (state = initialState, action ){

    switch(action.type){

        case POST_ACTIONS.GET_POSTS:
        return {
            ...state,
            posts: action.payload,
            loading: false,
        }
        default: return state
    }

}