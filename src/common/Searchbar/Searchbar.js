import { Input } from "antd";
import PropTypes from "prop-types";

const Searchbar = ({ onKeyUp }) => {
  return (
    <Input placeholder="Search..." onKeyUp={(e) => onKeyUp(e.target.value)} />
  );
};

Searchbar.propTypes = {
  onKeyUp: PropTypes.func.isRequired,
};

export { Searchbar };
