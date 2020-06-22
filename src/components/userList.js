import React from "react";
import styled from "styled-components";

function UserList({ list, handleSetItem }) {
  return (
    <div>
      <Ul>
        {list.length !== 0 &&
          list.map((item, i) => (
            <li key={i}>
              <span>{i + 1}.</span>
              <img src={item.avatar_url} />
              <div>
                <h3>{item.login}</h3>
                <span>site_admin: {item.site_admin ? "true" : "false"}</span>
                <button onClick={() => handleSetItem(item)}>Detail</button>
              </div>
            </li>
          ))}
      </Ul>
    </div>
  );
}

export default UserList;

const Ul = styled.ul`
  padding: 0;
  margin-left: 30px;
  img {
    width: 100px;
    height: 100px;
    margin-left: 5px;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    div {
      display: flex;
      flex-direction: column;
      margin-left: 5px;
      h3 {
        margin: 0;
      }
    }
  }
`;
