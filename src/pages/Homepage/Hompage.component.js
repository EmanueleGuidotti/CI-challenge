import styles from "./Homepage.module.scss";
import { List } from "../../common/List";
import {
  useGetPopularMoviesQuery,
  useSearchMovieByQueryQuery,
} from "../../services/movies.services";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Searchbar } from "../../common/Searchbar";

const HomepageComponent = () => {
  const [searchedTherm, setSearchedTherm] = useState("");
  const [page, setPage] = useState(1);
  const [moviesList, setMoviesList] = useState([]);
  const { data: latestMoviesData, isLoading } = useGetPopularMoviesQuery(page);
  const { data: searchedResultData, isLoading: isLoadingSearch } =
    useSearchMovieByQueryQuery(
      { searchedTherm, page },
      { skip: !searchedTherm }
    );

  useEffect(() => {
    if (!searchedTherm && !isLoading && latestMoviesData?.data.results.length) {
      setMoviesList(latestMoviesData.data.results);
    }
  }, [latestMoviesData]);

  useEffect(() => {
    if (
      searchedResultData?.data.results.length &&
      !isLoadingSearch &&
      searchedTherm
    ) {
      setMoviesList(searchedResultData.data.results);
    }
  }, [searchedTherm, searchedResultData]);

  const maxPages = useMemo(() => {
    if (searchedResultData?.data.total_pages > 1)
      return searchedResultData.data.total_pages;
    if (latestMoviesData?.data.total_pages > 1)
      return latestMoviesData.data.total_pages;
    return 1;
  }, [searchedResultData, latestMoviesData]);

  const loadMore = useCallback(() => {
    if (page < maxPages) setPage((prevData) => (prevData += 1));
  }, [maxPages]);

  const loadLess = useCallback(() => {
    console.log("load less");
    if (page > 1) setPage((prevData) => prevData - 1);
  }, [page]);

  return (
    <div className={styles.homePageContainer}>
      <h1>My Movies App</h1>
      <Searchbar
        onKeyUp={(therm) => {
          setSearchedTherm(therm);
          setPage(1);
        }}
      />
      <List
        loadMore={loadMore}
        loadLess={loadLess}
        items={moviesList}
        index={page}
      />
    </div>
  );
};

HomepageComponent.propTypes = {};

export default HomepageComponent;
