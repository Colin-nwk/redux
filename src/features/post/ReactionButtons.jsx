import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumpsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  // 42:00

  return (
    <div className="flex flex-wrap justify-between">
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          class="btn btn-circle btn-sm btn-secondary "
          key={name}
          type="button"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
