import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({ post }) => {
  const shortDescription =
    post.desc.length > 145 ? post.desc.substring(0, 145) + "..." : post.desc;
  const postTtile =
    post.title.length > 30 ? post.title.substring(0, 30) + "..." : post.title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img src={post.thumbnail} alt={post.title} />
      </div>

      <div className="post__content">
        <Link to={`/posts/${post.id}`}>
          <h3>{postTtile}</h3>
        </Link>
        <p>{shortDescription}</p>
        <div className="post__footer">
          <PostAuthor />
          <Link
            to={`/posts/category/${post.category}`}
            className="btn category"
          >
            {post.category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
