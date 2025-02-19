import { useNavigate } from 'react-router-dom';
import Post from '../types/post-type';
import { FiArrowUpRight } from 'react-icons/fi';
import formatPostTime from '../utils/format-post-time';
import { categoryProps } from '../utils/category-props';

export default function LatestPostCard({ post }: { post: Post }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-lg py-2 shadow-sm cursor-pointer"
      onClick={() => navigate('/details-page', { state: { post } })}
    >
      <div className="flex">
        <div className="flex flex-wrap mb-2 flex-1 gap-2">
          {post.categories.map((category, index) => (
            <span key={index} className={categoryProps(category)}>
              {category}
            </span>
          ))}
        </div>
        <FiArrowUpRight className="mt-1" />
      </div>
      <div className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</div>
      <div className="text-gray-500 text-xs ">
        {post.authorName} • {formatPostTime(post.timeOfPost)}
      </div>
    </div>
  );
}
