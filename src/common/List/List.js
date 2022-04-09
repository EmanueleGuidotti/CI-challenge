import { Row, Divider } from "antd";
import "antd/dist/antd.min.css";
import PropTypes from "prop-types";
import { ListItem } from "./components";

const List = ({ items }) => {
  const {
    data: { results },
  } = items;

  return (
    <>
      {results.map((item) => (
        <Row key={item.id} gutter={20}>
          <ListItem key={item.id} itemData={item} />
          <Divider orientation="left" />
        </Row>
      ))}
    </>
  );
};

List.propTypes = {
  items: PropTypes.object.isRequired,
};

export { List };
