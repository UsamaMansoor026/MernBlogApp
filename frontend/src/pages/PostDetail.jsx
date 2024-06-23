import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";

import Thumbnail from "../assets/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="post-detail__container">
        {/* Header of the Post Detail */}
        <div className="post-detail__header">
          <PostAuthor />

          {/* These Buttons only show if the user is logged and click on his own blogs */}
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>

        {/* Post Title */}
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          praesentium provident autem minima ipsam. Nisi, et dolore impedit
          aliquid, error harum repellendus eveniet tempore illo veritatis
          maiores numquam fugiat autem ipsum placeat? Nam animi dolor, obcaecati
          velit suscipit tempore quos?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          cumque tenetur veniam delectus est? Fugiat voluptates reiciendis
          voluptatem illum nesciunt cumque rerum veritatis provident similique
          corporis delectus deleniti fuga consequatur doloribus ut ratione ex
          suscipit, quisquam ipsum! Enim cum eveniet cupiditate sapiente
          corrupti quam quibusdam cumque commodi eum, voluptas minima sint
          ducimus explicabo facere officia?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          explicabo provident sint minima corporis facilis a cumque libero eos
          dicta molestiae, illo suscipit mollitia iure, itaque nihil ducimus?
          Nesciunt iste eum dolores laborum deserunt reprehenderit officia, eius
          dignissimos, beatae earum explicabo ipsa! Natus quae cumque aliquid
          dolores? Totam, dolorum perspiciatis? Iusto totam, praesentium est in,
          omnis autem repellat earum eligendi amet exercitationem fugiat nihil
          deleniti deserunt ea perferendis ab qui ipsum, modi iste asperiores
          expedita officia. Asperiores, modi aut. Amet perferendis expedita
          porro, repellat praesentium explicabo totam quibusdam iste
          necessitatibus non, ducimus dolorum recusandae aliquid maiores eveniet
          animi corrupti. Laudantium numquam voluptatibus obcaecati recusandae
          voluptatum a totam odio earum dicta ut?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, deleniti!
          Quibusdam quidem doloremque molestias tempore ducimus inventore nemo
          cum quis.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          nesciunt officia voluptas earum totam ipsa temporibus facilis quam
          eaque magnam? Placeat, vero minus perspiciatis omnis quia corrupti
          deleniti asperiores voluptates sapiente, inventore fugit optio
          provident ipsa cumque incidunt beatae molestiae nobis suscipit harum?
          Quaerat numquam nobis omnis corporis veniam autem accusantium ab ea
          magni molestiae atque repudiandae dolorem odio enim adipisci sint
          laboriosam a quisquam, ipsa hic provident corrupti, assumenda, aliquid
          quia? Sed ipsum beatae possimus eligendi nulla tempore similique!
          Provident eaque sit, placeat, nesciunt quisquam quaerat doloremque
          voluptas natus earum unde ad eos molestias eius excepturi nostrum fuga
          reiciendis rem ab necessitatibus amet facilis in cumque deserunt
          laudantium. In rerum quis minus quam rem atque, consequuntur officiis
          eos doloribus ipsam ut eius quidem nobis sed expedita accusantium, sit
          necessitatibus facilis. Facere enim distinctio, praesentium hic
          eligendi repudiandae assumenda earum doloribus iusto nihil accusamus
          officia, ullam modi sunt ut beatae, ab cumque dolore esse iure. Odio
          eos ex, eius quisquam quasi reprehenderit sequi molestiae consectetur
          veritatis fuga unde sint corrupti neque iusto voluptatem tempore
          praesentium. Repellendus temporibus officiis neque veniam tempora
          possimus fugit ducimus commodi error sunt tempore facere deleniti
          natus alias reiciendis illum culpa animi libero similique, ab iusto.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
