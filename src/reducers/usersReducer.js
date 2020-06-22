import { FETCH_GITHUB_USERS } from "../contants/users";

const userList = {
  userList: [],
};

export const usersReducer = (state = userList, action) => {
  switch (action.type) {
    case FETCH_GITHUB_USERS: {
      return {
        userList: action.payload.data,
      };
    }
    default:
      return state;
  }
};
