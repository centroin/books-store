import { createContext } from "react";

const authorDetail = createContext({
  authorName: "",
  setAuthorName: (name) => {}
});

export default authorDetail;