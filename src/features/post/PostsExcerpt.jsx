import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
  return (
    <>
      <div className="card w-64 h-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-lg  font-bold">{post?.title.substring(0, 20)}</h2>
          <p className="text-left">{post?.body.substring(0, 100)}</p>
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-xs">View</button>
          </div>
          <ReactionButtons post={post} />
        </div>
      </div>
    </>
  );
};

export default PostsExcerpt;
