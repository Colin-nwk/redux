import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);

  return (
    <span className="badge badge-secondary p-2" >
      by {author ? author.name : "unknown author"}
    </span>
  );
};

export default PostAuthor;
