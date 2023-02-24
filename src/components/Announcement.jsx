import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "../style/Announcement.css";


const Announcement = ({ data }) => {
  const { id, cover, title } = data;
  return (
    <section className="container_announcement">
      <article className="bloc_announcement">
        <Link to={`/${id}`}>
          <figure className="bloc_announcement-img">
            <img src={cover} alt="annonces" />
            <figcaption className="bloc_announcement-title">
              <h2>
                {title}
              </h2>
            </figcaption>
          </figure>
        </Link>
      </article>
    </section>
  );
};

Announcement.propTypes = {
  location: propTypes.shape({
    id: propTypes.string,
    title: propTypes.string,
    cover: propTypes.string
  })
};

export default Announcement;