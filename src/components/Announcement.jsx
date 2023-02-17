import React from "react";
import { Link } from "react-router-dom";
import '../style/Announcement.css';

const Announcement = ({ props }) => {
  return (
    <section className="container_announcement">
      {
        props.map((list, i) => (
          <article key={i} className="bloc_announcement">
            <Link to={`/${list.id}`}>
              <figure className="bloc_announcement-img">
                <img src={list.cover} alt="annonces" />
                <figcaption className="bloc_announcement-title">
                  <h2>
                    {list.title}
                  </h2>
                </figcaption>
              </figure>
            </Link>
          </article>
        ))
      }
    </section>
  );
};

export default Announcement;