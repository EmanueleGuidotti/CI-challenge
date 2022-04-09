import styles from "./Homepage.module.scss";
import { List } from "../../common/List";
import {
  useGetPopularMoviesQuery,
  useSearchMovieByQueryQuery,
} from "../../services/movies.services";
import { useMemo, useState } from "react";
import { Searchbar } from "../../common/Searchbar";

const HomepageComponent = () => {
  const [searchedTherm, setSearchedTherm] = useState("");
  const { data: latestMoviesData, isLoading } = useGetPopularMoviesQuery();
  const { data: searchedResultData, isLoading: isLoadingSearch } =
    useSearchMovieByQueryQuery(searchedTherm, { skip: !searchedTherm });

  const movies = useMemo(() => {
    if (searchedResultData && !isLoadingSearch && searchedTherm) {
      return searchedResultData;
    }
    if (!searchedTherm) {
      return latestMoviesData;
    }
  }, [searchedTherm, latestMoviesData, searchedResultData]);

  const MoviesList = () =>
    useMemo(() => {
      if (isLoading || isLoadingSearch) return <div>Loading data...</div>;
      return <List items={movies} />;
    }, [movies]);

  return (
    <div className={styles.homePageContainer}>
      <h1>My Movies App</h1>
      <Searchbar onKeyUp={(therm) => setSearchedTherm(therm)} />
      <MoviesList />
    </div>
  );
};

HomepageComponent.propTypes = {};

export default HomepageComponent;
