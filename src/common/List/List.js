import { Row, Divider } from "antd";
import "antd/dist/antd.min.css";
import PropTypes from "prop-types";
import { Virtuoso } from "react-virtuoso";
import AutoSizer from "react-virtualized-auto-sizer";
import { ListItem } from "./components/ListItem";
import { useWindowHeight } from "@react-hook/window-size";
import { Footer } from "./components/Footer";

const RowElement = ({ data }) => {
  const { id } = data;

  return (
    <Row key={id} gutter={20}>
      <ListItem key={id} itemData={data} />
      <Divider orientation="left" />
    </Row>
  );
};

RowElement.propTypes = {
  data: PropTypes.object.isRequired,
};

const List = ({ items, loadMore, loadLess, index }) => {
  const windowHeight = useWindowHeight() - 150;

  return (
    <>
      <AutoSizer>
        {({ width }) => (
          <Virtuoso
            style={{ height: windowHeight, width: width }}
            totalCount={items.length}
            data={items}
            endReached={loadMore}
            firstItemIndex={index}
            startReached={loadLess}
            itemContent={(index, item) => <RowElement data={item} />}
            components={{ Footer }}
          />
        )}
      </AutoSizer>
    </>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  loadMore: PropTypes.func,
  loadLess: PropTypes.func,
  index: PropTypes.number,
};

export { List };
