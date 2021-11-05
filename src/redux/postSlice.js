import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    isLoading: false,
    posts: [],
  },
  reducers: {
    fetchPosts: async (state, dispatch) => {
      const result = await axios.get('https://hiring-submission-general.csenthil.workers.dev/posts')
      return { posts: result.data };
    },
    clearPosts: (state) => {
      state.posts = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchPosts,clearPosts } = postSlice.actions

export default postSlice.reducer