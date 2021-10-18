const LOAD_USERS = "users/LOAD";

//LOAD USERS
const loadUsers = (data) => {
  return {
    type: LOAD_USERS,
    data,
  };
};

export const loadTheUsers = () => async (dispatch, getState) => {
  const allUsers = await fetch(`/api/users/allUsers`);
  const allUsersArray = await allUsers.json();
  dispatch(loadUsers(allUsersArray));
};

const initialState = {};

const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USERS: {
      newState = { ...state };
      action.data.forEach((user) => {
        newState[user.id] = user;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default usersReducer;
