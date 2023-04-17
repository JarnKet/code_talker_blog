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
    <div className="w-full h-full flex items-center pl-4 justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full justify-items-center">
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <div className="flex item-center w-full lg:w-[300px]">
              <h1 className="font-bold text-neutral-400 text-4xl mr-2">
                {index + 1}
              </h1>
              <FeaturedPostCard key={index} post={post} />
            </div>
          ))}
        {/* <div className="flex justify-center ">
          <h1 className="font-bold text-neutral-400 text-4xl mr-2">01</h1>
          <div>
            <div className="flex  items-center">
              <div className="w-5 h-5 bg-black rounded-full mr-2" />
              <h3>John Doe</h3>
            </div>
            <h1 className="font-bold text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              iure?
            </h1>
            <small className="text-neutral-400">10 Apr 2023</small>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div> */}
      </div>
    </div>
  );
};

export default FeaturedPosts;
