import React, { useState } from "react";

import PostItem from "./PostItem";
import { DummyPosts } from "../Constants";

const Posts = () => {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts__container">
          {posts.map((post) => (
            <PostItem post={post} />
          ))}
        </div>
      ) : (
        <h2 className="center">No post Found</h2>
      )}
    </section>
  );
};

export default Posts;
