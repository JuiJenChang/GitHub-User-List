import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGithubUserList, fetchGithubUser } from "./api/api";
import { usersAction } from "./actions/usersAction";
import UserList from "./components/userList";
import styled from "styled-components";

function App() {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.userList);

  useEffect(() => {
    fetchGithubUserList().then((data) => {
      dispatch(usersAction(data));
    });
  }, []);

  const handleSetItem = (item) => {
    fetchGithubUser(item.login).then((data) => setState(data));
  };
  console.log(list);

  return (
    <div>
      <h1 style={{ marginLeft: "30px" }}>GitHub User List</h1>
      <UserList list={list} handleSetItem={handleSetItem} />
      {state && (
        <DetailContent>
          <img src={state.avatar_url} />
          <div>
            <h3>{state.name}</h3>
            <span>{state.login}</span>
            <span>{state.bio}</span>
            <span>{state.location}</span>
            <span>site_admin: {state.site_admin ? "true" : "false"}</span>
            <a href={state.blog}>blog</a>
          </div>
        </DetailContent>
      )}
    </div>
  );
}

export default App;

const DetailContent = styled.div`
  width: 400px;
  position: fixed;
  top: 50px;
  right: 300px;
  display: flex;
  flex-direction: column;
  border: 3px #b0bec5 solid;
  img {
    width: 100%;
    height: 400px;
  }
  div {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    h3 {
      margin: 0;
    }
    a {
      text-decoration: none;
      color: #0277bd;
    }
  }
`;
