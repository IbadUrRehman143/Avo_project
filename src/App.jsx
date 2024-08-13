import AboutC from "./Components/AboutC/AboutC.jsx"
import CardWork from "./Components/CardWork/CardWork.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Header from "./Components/Header/Header.jsx"
import RecentBlog from "./Components/RecentBlog/RecentBlog.jsx"
import Slicky from "./Components/Slicky/Slicky.jsx"
import Slide from "./Components/Slide/Slide.jsx"

function App() {
  

  return (
    <>
      {/* <Header/> */}
      {/* <Slide/> */}
      {/* <AboutC/> */}
      <div className="tw-mt-44"></div>
      <CardWork/>
      <div className="tw-mt-10"></div>
      <Slicky/>
      <RecentBlog/>
      <div className="tw-mt-10"></div>
      <Footer/>
    </>
  )
}

export default App
