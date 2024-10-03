import image from "../assets/news.jpeg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || image}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt={title || "News item image"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h5>
        <p className="card-text">
          {description
            ? description.length > 90
              ? description.slice(0, 90) + "..."
              : description
            : "No description available."}
        </p>
        <a
          href={url}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
