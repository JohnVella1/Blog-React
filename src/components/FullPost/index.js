import './styles.scss';
import PropTypes from 'prop-types';
import { useParams, Navigate } from 'react-router-dom';

const FullPost = ({ list }) => {
  const {idDeArticle} = useParams();
  console.log(idDeArticle);
  const foundArticle = list.find((post) => post.id == idDeArticle);
  if (!foundArticle) {
    return <Navigate to="/404" />;
  }
  const { title, category, excerpt } = foundArticle;
  return (
    <div className="full">
      <article className="post">
        <h2 className="post-title">{ title }</h2>
        <div className="post-category">{ category }</div>
        <p className="post-excerpt">{ excerpt }</p>
      </article>
    </div>
  );
}


FullPost.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  })).isRequired,
};

export default FullPost;