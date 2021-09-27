import React, {useEffect, useState, useContext} from "react";
import axios from 'axios';
import authorDetail from "./Context/AuthorDetail";
import { useHistory } from "react-router-dom";

const List = () => {
  let [posts, setPosts] = useState(0);
  let [loading, setloading] = useState(false);
  const {authorName, setAuthorName} = useContext(authorDetail);
  const history = useHistory();

  console.log(authorName + "0")
  useEffect(() => {
    setloading(true);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const userList = res.data;
      console.log(userList)
      setPosts(userList)
    })
    console.log("useEffect");
    setloading(false);
  }, []);

  const AuthorSelection = selectedName =>{
    console.log(authorName + "1")
    setAuthorName(selectedName);
    console.log(authorName + "2")
    history.push("/detail");
  }
  return (
    <>
      {loading === true ? (
        <div className="loading">Loading</div>
      ) : (
        <>
          <h1>List page</h1>
          {posts && posts.map(post => (
            <li key={post.id}><button onClick={() => AuthorSelection(post.name)}>{post.name}</button></li>
          ))}
        </>
      )}
    </>
  );
};

export default List;
