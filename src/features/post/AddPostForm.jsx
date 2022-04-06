import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClicked = (e) => {
    // console.log(e);
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  return (
    <>
      <section className="mt-3">
        <div className="card w-96 bg-base-100 shadow-md p-5">
          <form className="w-full">
            <h3 className="text-3xl text-center">Add New Post</h3>
            <div className="grid grid-cols-1 gap-6 mt-4 w-full ">
              <div className="flex flex-col justify-start mt-2">
                <label htmlFor="postTitle" className="text-left mb-1">
                  Title:
                </label>
                <input
                  id="postTitle"
                  name="postTitle"
                  value={title}
                  onChange={onTitleChange}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-lg"
                />
              </div>
              <div className="flex flex-col justify-start mt-2">
                <label htmlFor="postAuthor" className="text-left mb-1">
                  Author
                </label>
                <select
                  name="postAuthor"
                  id="postAuthor"
                  value={userId}
                  onChange={onAuthorChange}
                  className="select w-full select-secondary "
                >
                  <option disabled value="">
                    select author
                  </option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col justify-start mt-2">
                <label htmlFor="postContent" className="text-left mb-1">
                  Content:
                </label>
                <textarea
                  id="postContent"
                  name="postContent"
                  value={content}
                  onChange={onContentChange}
                  className="textarea textarea-secondary"
                  placeholder="post content"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="btn btn-success"
                disabled={!canSave}
                onClick={onSavePostClicked}
              >
                Save Post
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddPostForm;
