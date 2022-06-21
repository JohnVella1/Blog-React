import './styles.scss';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const Post = ({
  title, category, excerpt, id,
}) => (
  <article className="post">
    <Link to={`/articles/${id}`}>
      <h2 className="post-title">{ title }</h2>
    </Link>
    <div className="post-category">{ category }</div>
    {/* eslint-disable-next-line react/no-danger */}
    <p className="post-excerpt" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt) }} />
  </article>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
