const api_url = "https://api.github.com/users?per_page=100";
const user_url = "https://api.github.com/users";

export const fetchGithubUserList = () => {
  return fetch(api_url)
    .then((res) => res.json())
    .then((res) => (Array.isArray(res) ? res : []))
    .catch((err) => alert(err));
};

export const fetchGithubUser = (login) => {
  return fetch(`${user_url}/${login}`)
    .then((res) => res.json())
    .catch((err) => alert(err));
};
