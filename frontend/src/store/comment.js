import { csrfFetch } from './csrf';




// ----POST A COMMENT----

const POST_COMMENT = 'users/PostComments';

const addComment = (comment) => {
  return {
    type: POST_COMMENT,
    payload: comment
  }
}

export const createComment = (newComment) => async dispatch => {
  const { userId, carId, comment } = newComment;

  const res = await csrfFetch(`/api/cars/car/${carId}/comment`, {
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

// ----GET ALL COMMENT----
const GET_COMMENTS = 'users/getComments';

const allComments = (comment) => {
  return {
    type: GET_COMMENTS,
    payload: comment
  }
}

export const getAllComments = (carId) => async (dispatch) => {
  const res = await csrfFetch(`/api/cars/car/${carId}/comments`, {
    method: 'GET'
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(allComments(data));
    // return res;
  }
}

// ----DELETE COMMENT----
// const DEL_COMMENTS = 'users/delComments';

// const deleteAComment = (comment) => {
//   return {
//     type: DEL_COMMENTS,
//     payload: comment
//   }
// }

export const deleteComment = (carId, commentId) => async(dispatch) => {
  const res = await csrfFetch(`/api/cars/car/${carId}/comment/${commentId}/delete`, {
    method: 'DELETE'
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(allComments(data));
    return res;
  }
}


// ----EDIT COMMENT----
const EDIT_COMMENT = 'users/editComment';

const editAComment = (comment) => {
  return {
    type: EDIT_COMMENT,
    payload: comment
  }
}


export const editComment = (payload, commentId, carId,) => async(dispatch) => {
  const res = await csrfFetch(`/api/cars/car/${carId}/comment/${commentId}/edit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const comment = await res.json();
  dispatch(editAComment(comment));
  return comment;
}


//trying a different way to apporach reducers
// ---------------------------------
const initialState = {};

const commentReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_COMMENTS:
      newState = Object.assign({}, state);
      newState.comments = action.payload;
      return newState;
    case POST_COMMENT:
      newState = Object.assign({}, state);
      newState.comments = action.payload;
      return newState;
    case EDIT_COMMENT:
      newState = Object.assign({}, state);
      newState.comments = action.payload;
      return newState;
    default:
      return state;
  }
}

export default commentReducer;
