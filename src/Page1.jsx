import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <Link to="/page1/detail-a">Page 1 Detail A</Link>
      <br />
      <Link to="/page1/detail-b">Page 1 Detail B</Link>
    </div>
  );
};
