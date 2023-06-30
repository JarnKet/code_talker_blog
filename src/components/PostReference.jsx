import { useEffect, useState } from "react";
import Link from "next/link";

const PostReference = ({ post }) => {
  const [h3Tags, setH3Tags] = useState([]);

  useEffect(() => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(post.content.html, "text/html");
    const tags = htmlDoc.querySelectorAll("h3");
    setH3Tags(Array.from(tags));
  }, [post.content.html]);
  return (
    <div
      className={`flex flex-col p-4 mt-8 gap-y-2  rounded-2xl card dark:cardDark`}
    >
      <h4 className="text-lg font-semibold text-center">ສາລະບານ</h4>
      {h3Tags.length > 0 &&
        h3Tags.map((h3Tag, index) => (
          <a
            key={index}
            href={`#h3-${index}`}
            className="hover:underline hover:underline-offset-8"
          >
            {h3Tag.textContent}
          </a>
        ))}
    </div>
  );
};

export default PostReference;
