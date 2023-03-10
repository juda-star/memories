// import { STATES } from "mongoose";
import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  END_LOADING,
  START_LOADING,
} from "../constants/actionTypes";

export default (state = {isLoading:true,posts: []}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.currentPage,
        currentPage: action.payload.numberOfPages,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload };
    case LIKE:
      return {...state, posts :state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )}
    case CREATE:
      return {...state,posts:[...state.posts, action.payload]};
    case UPDATE:
      return {...state, posts :state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      )}
    case DELETE:
      return {...state, posts :state.posts.filter((post) => post._id !== action.payload)}
    default:
      return state;
  }
};
