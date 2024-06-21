import React, { useState } from "react";

import Thumbnail1 from "../assets/blog1.jpg";
import Thumbnail2 from "../assets/blog2.jpg";
import Thumbnail3 from "../assets/blog3.jpg";
import Thumbnail4 from "../assets/blog4.jpg";
import PostItem from "./PostItem";

const dummyPosts = [
  {
    id: 1,
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is title of 1st blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati.",
    authorID: 1,
  },
  {
    id: 2,
    thumbnail: Thumbnail2,
    category: "technology",
    title: "This is title of 2nd blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati.",
    authorID: 13,
  },
  {
    id: 3,
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is title of 3rd blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati.",
    authorID: 2,
  },
  {
    id: 4,
    thumbnail: Thumbnail4,
    category: "science",
    title: "This is title of 4th blog",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam nulla iste labore aut cumque quos saepe in consequuntur obcaecati.",
    authorID: 3,
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);

  return (
    <section className="posts">
      <div className="container posts__container">
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
