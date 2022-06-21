import Post from 'src/components/Post';
import PropTypes from 'prop-types';

import './styles.scss';

const Posts = ({ list, zenMode }) => (
  <main className="posts">
    <h1 className="posts-title">Dev Of Thrones</h1>
    <div className={zenMode ? 'posts-list posts-list--zen' : 'posts-list'}>
      {
        list.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))
      }
    </div>
  </main>
);

Posts.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  zenMode: PropTypes.bool.isRequired,
};

export default Posts;
