import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function ButtonBack() {
  return (
    <Link to="/">
      <LeftOutlined />
    </Link>
  )
}
