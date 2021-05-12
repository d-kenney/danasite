import './Blog.css';
import { Link } from 'react-router-dom';
import myBlogs from './myBlogs';

const Blog = () => {
  window.scrollTo(0, 0);
  return (
    <div id="blogContainer" className="flexColumn">
      <div id="blogBox1" className="flexColumn">
        <h1 id="blogTitle">Blog</h1>
      </div>
      <div id="blogBox2">
        {myBlogs.map((blog) => (
          <div className="singleBlog flexColumn" key={blog.path}>
            <h4 className="singleBlogDate">{blog.date}</h4>
            <h2 className="singleBlogTitle">{blog.title}</h2>
            <p className="singleBlogTeaser">{blog.teaser}</p>
            <Link className="singleBlogLink" to={`blog/${blog.path}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
