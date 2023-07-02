import { getPosts } from "../../services";
import { Categories, PostCard } from "../../components";
import { useState, useEffect } from "react";
import Head from "next/head";

const Post = ({ style }) => {
  const [posts, setPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Code Talker | ບົດຄວາມທັງໝົດ</title>
      </Head>
      <section
        className={`${style} container flex-col items-center justify-center px-8 py-10 mx-auto mb-10 lg:flex lg:min-h-screen lg:px-10 gap-y-6 `}
        id="postcard"
      >
        <h1 className="mb-4 text-4xl font-bold text-center">ບົດຄວາມລ່າສຸດ.</h1>
        <div
          id="postcard"
          className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 "
        >
          <div className="col-span-1 p-8 shadow-xl lg:col-span-8 card dark:cardDark rounded-2xl">
            {dataLoaded &&
              posts.map((post) => (
                <PostCard post={post.node} key={post.title} />
              ))}
          </div>
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative lg:sticky top-8 ">
              <Categories />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
