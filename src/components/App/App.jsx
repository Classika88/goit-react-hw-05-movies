import { Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Layout from '../Header/Header';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const PageNotFound404 = lazy(() => import('pages/Page404'));

export const App = () => {
  return (
    <div
      style={{
        width: '1280px',
        padding: '0 10px',
        margin: '0 auto',
      }}
    >
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MoviesDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<PageNotFound404 />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
