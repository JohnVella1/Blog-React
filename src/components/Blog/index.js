import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import NotFound from 'src/components/NotFound';
import FullPost from 'src/components/FullPost';
import Spinner from 'src/components/Spinner';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useState } from 'react';
import useAjax from '../../customHooks/useAjax';
import useTitle from '../../customHooks/useTitle';
import './styles.scss';

const Blog = () => {
  const [zenMode, setZenMode] = useState(false);
  const [posts, postLoading] = useAjax('https://oclock-open-apis.vercel.app/api/blog/posts');
  const [categories, categoriesLoading] = useAjax('https://oclock-open-apis.vercel.app/api/blog/categories');

  useTitle();

  const toggleZenMode = () => {
    setZenMode(!zenMode);
  };

  const getFilteredPosts = (routeName) => {
    if (routeName === 'Accueil') {
      return posts;
    }

    const filtredPosts = posts.filter((post) => post.category === routeName);

    return filtredPosts;
  };



  if (postLoading || categoriesLoading) return <Spinner />;

  return (
    <div className="blog">
      <Header
        list={categories}
        zenMode={zenMode}
        toggleZenMode={toggleZenMode}
      />
      <Routes>
        {}
        <Route path="/jquery" element={<Navigate replace to="/react" />} />
        <Route path="*" element={<NotFound />} />
        {
          categories.map(({ label, route }) => (
            <Route
              key={label}
              path={route}
              element={(
                <Posts
                  list={getFilteredPosts(label)}
                  zenMode={zenMode}
                />
            )}
            />
          ))
        }
        <Route path="/articles/:idDeArticle" element={<FullPost list={posts} />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Blog;