import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/header/Header"



function App() {


  return (
    <div className="container mx-auto ">
      <Header></Header>
      <div className="md:flex ">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
