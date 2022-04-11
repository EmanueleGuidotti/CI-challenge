import { Col, Image } from "antd";
import styles from "./ListItem.module.scss";
import StarRatings from "react-star-ratings";
import PropTypes from "prop-types";

const ListItem = ({
  itemData: { poster_path, release_date, title, overview, vote_average },
}) => {
  return (
    <>
      <Col span={6} order={1}>
        <Image
          width={"100%"}
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        />
      </Col>
      <Col span={12} order={2}>
        <p className={styles.releaseDate}>{release_date}</p>
        <h3 role="heading">{title}</h3>
        <p>{overview}</p>
        <StarRatings
          numberOfStars={10}
          rating={vote_average}
          starDimension="20px"
          starSpacing="5px"
        />
      </Col>
    </>
  );
};

ListItem.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export { ListItem };
