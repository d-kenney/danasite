import './SingleBlog.css';
import myBlogs from './myBlogs';

const SingleBlog = (props) => {
  window.scrollTo(0, 0);
  const blog = myBlogs.filter(
    (blog) => blog.path === props.match.params.blogid
  )[0];

  return (
    <div id="singleBlogContainer" className="flexColumn">
      <div id="singleBlogWrapper">
        <h3 id="singleBlogDate">{blog.date}</h3>
        <h1 id="singleBlogTitle">{blog.title}</h1>
        {blog.body.map((paragraph, idx) => (
          <p className="singleBlogBody" key={idx}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
