import styles from "./Homepage.module.scss";
import { List } from "../../common/List";
import { useGetPopularMoviesQuery } from "../../services/movies.services";
import { useMemo } from "react";

const HomepageComponent = () => {
  const { data: latestMoviesData, isLoading } = useGetPopularMoviesQuery();

  const MoviesList = () =>
    useMemo(() => {
      if (isLoading) return <div>Loading data...</div>;
      return <List items={latestMoviesData} />;
    }, []);

  return (
    <div className={styles.homePageContainer}>
      <h1>Home Page</h1>
      <MoviesList />
    </div>
  );
};

HomepageComponent.propTypes = {};

export default HomepageComponent;
