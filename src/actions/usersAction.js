import { FETCH_GITHUB_USERS } from "../contants/users";

export const usersAction = (data) => {
  return { type: FETCH_GITHUB_USERS, payload: { data } };
};
