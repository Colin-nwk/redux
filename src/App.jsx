// import Counter from "./features/counter/Counter";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
function App() {
  return (
    <>
      <div classNameName="hero min-h-screen bg-base-200 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2 place-content-center mt-3">
          <div className="col-span-4 place-content-center">
            <PostsList />
          </div>
          <div className="">
            <AddPostForm />
          </div>
        </div>
      </div>
      {/* 

      <div classNameName="hero min-h-screen bg-base-200">
        <div classNameName="hero-content text-center">
          <div classNameName="max-w-5xl mx-auto ">
           
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
