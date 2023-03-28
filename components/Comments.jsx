import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

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
        <div className="rounded-xl card dark:cardDark shadow-lg   p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} ຄວາມຄິດເຫັນ
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> ຄັ້ງວັນທີ{' '}
                {moment(comment.createdAt).format('DD MMM, YYYY')}
              </p>
              <p className="whitespace-pre-line  w-full">
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
