import { useState, useEffect } from 'react';
import { FeaturedPostCard } from '../components';
import { getFeaturedPosts } from '../services';

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full pl-4">
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 justify-items-center">
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <div className="flex item-center w-full lg:w-[300px]">
              <h1 className="mr-2 text-4xl font-bold text-neutral-600 dark:text-neutral-400">
                {index + 1}
              </h1>
              <FeaturedPostCard key={index} post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;