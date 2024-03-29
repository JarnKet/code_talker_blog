import moment from "moment";
import React, { useEffect } from "react";
import Image from "next/image";

const PostDetail = ({ post }) => {
  useEffect(() => {
    const postDetailElement = document.querySelector(".post-detail");
    const h3Tags = postDetailElement.querySelectorAll("h3");

    // Access the h3 tags and do something with them
    h3Tags.forEach((h3Tag) => {
      h3Tags.forEach((h3Tag, index) => {
        h3Tag.setAttribute("id", `h3-${index}`);
      });
      // You can perform any desired actions with the h3 tag here
    });
  }, [post.content.html]);

  return (
    <div className="w-full pb-12 mb-8 lg:mt-8 themeComponentRevert rounded-2xl">
      <div className="relative w-full h-40 mb-6 overflow-hidden shadow-md lg:h-60 rounded-t-2xl">
        <Image
          className="object-cover w-full h-full "
          src={post.featuredImage.url}
          alt={post.title}
          fill
          sizes={100}
        />
      </div>
      <div className="px-4 ">
        <div className="flex items-center justify-between w-full pb-2 mb-8 ">
          <div className="flex items-center justify-center ">
            <Image
              alt={post.author.name}
              height={30}
              width={30}
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline ml-2 text-base font-semibold align-middle lg:text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="flex items-center justify-center text-sm lg:text-base text-neutral-500">
            <span>{moment(post.createdAt).format("DD MMM, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-bold">{post.title}</h1>
        <div
          className="post-detail"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </div>
  );
};

export default PostDetail;
