import "./Article.css";
import MyNavbar from "../../components/navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


function Article() {
  return (
    <div className="article-wrapper">
      <MyNavbar />
      <h1>صفحه مقالات</h1>
      <hr />
      <div className="btn-container">
        <Link to='php' className="link-btn">php article</Link>
        <Link to='js' className="link-btn">js article</Link>
        <Link to='react' className="link-btn">react article</Link>
      </div>
      <hr />
      <Outlet />
      
{/* 
      <Routes>
          <Route path="php" element={<h2>php article</h2>}></Route>
          <Route path="js" element={<h2>javascript article</h2>}></Route>
          <Route path="react" element={<h2>react article</h2>}></Route>
      </Routes> */}
    </div>
  );
}
export default Article;
