import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Article      from "./pages/article/Article";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Course from "./pages/course/Course";
import routes from "./routes";

function App() {

  let router = useRoutes(routes)

  return router
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/article/*" element={<Article />} >
  //         <Route path="php" element={<h2>php article</h2>}></Route>
  //         <Route path="js" element={<h2>javascript article</h2>}></Route>
  //         <Route path="react" element={<h2>react article</h2>}></Route>
  //       </Route>
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/panel" element={<Panel />} />
  //       {/* <Route path="/course" element={<Course />} /> */}
  //       {/* <Route path="/course/*" element={<Course />} /> */}
  //       <Route path="/course/:courseId" element={<Course />} />
        
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
