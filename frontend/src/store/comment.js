import { csrfFetch } from './csrf';




// ----POST A COMMENT----

const POST_COMMENT = 'users/PostComment';

const addComment = (comment) => {
  return {
    type: POST_COMMENT,
    payload: comment
  }
}

export const createComment = (newComment) => async dispatch => {
  const { userId, carId, comment } = newComment;

  const res = await csrfFetch(`api/cars/car/${carId}/comment`, {
    method: 'POST',
    body: JSON.stringify({
      userId,
      carId,
      comment
    })
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(addComment(data));
    return res;
  }
}

// ----GET A COMMENT----
const GET_COMMENTS = 'users/getComments';

const allComments = (comment) => {
  return {
    type: GET_COMMENTS,
    payload: comment
  }
}

export const getAllComments = (carId) => async (dispatch) => {
  const res = await csrfFetch(`api/cars/${carId}`, {
    method: 'GET'
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(allComments(data));
    return res;
  }
}





//trying a different way to apporach reducers
// ---------------------------------
const initialState = {};

const commentReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState= action.comment;
      return newState;
    case POST_COMMENT:
      newState = Object.assign({}, state);
      newState['comments'] = action.comment;
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
