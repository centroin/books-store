import React, { useContext } from "react";
import authorDetail from "./Context/AuthorDetail";

const Detail = () => {
  const { authorName } = useContext(authorDetail);
  return(
    <>
      <h1>Detail page about {authorName}</h1>
    </>
  )
};

export default Detail;
