import { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="p-8 pb-12 mb-8 lg:pt-8 lg:pr-8">
          <h1 className="pb-4 mb-8 text-xl font-semibold ">
            {comments.length} ຄວາມຄິດເຫັນ
          </h1>
          {comments.map((comment, index) => (
            <div key={index} className="pb-4 mb-4 ">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> ຄັ້ງວັນທີ{" "}
                {moment(comment.createdAt).format("DD MMM, YYYY")}
              </p>
              <p className="w-full whitespace-pre-line">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
