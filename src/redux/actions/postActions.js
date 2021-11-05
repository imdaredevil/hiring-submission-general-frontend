import { POST_ACTIONS } from '../actionTypes'
import axios from 'axios'

export const getPosts = () => async dispatch => {
    try{
        const res = await axios.get('https://hiring-submission-general.csenthil.workers.dev/posts')
        dispatch( {
            type: POST_ACTIONS.GET_POSTS,
            payload: res.data
        })
    }
    catch(e){
        console.error(`error occured while getting posts from backend ${e.stack}`);
    }
}