import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  //   const posts = useSelector((state) => state.posts);
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  console.log(posts);
  return (
    <section className="m-2">
      <h2 className="text-4xl font-bold my-3 text-center">Posts</h2>
      <div className="flex gap-2 justify-center items-center flex-wrap">
        {orderedPosts?.map((post) => (
          <div className="card w-64 bg-base-100 shadow-xl" key={post.id}>
            <div className="card-body">
              <h2 className="card-title">{post?.title}</h2>
              <p className="text-left">{post?.content.substring(0, 100)}</p>
              <PostAuthor userId={post.userId} />
              <TimeAgo timestamp={post.date} />
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View</button>
              </div>
              <ReactionButtons post={post} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsList;
