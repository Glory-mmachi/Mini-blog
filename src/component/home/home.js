import UseFetch from "../../useFetch";
import BlogList from "../blog list/blog-list.component";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = UseFetch("http://localhost:8000/blogs");

  return (
    <div className="home content">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}; 

export default Home;
