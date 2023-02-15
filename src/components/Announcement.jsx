import React from "react";
import { Link } from "react-router-dom";
import '../style/Announcement.css';

const Announcement = ({ data }) => {
  return (
    <div className="container_announcement">
      {
        data.map((list) => (
          <div key={list.id} className="bloc_announcement">
            <Link to={`/${list.id}`}>
              <article className="bloc_announcement-img">
                <img src={list.cover} alt="annonces" />
                <figure className="bloc_announcement-title">
                  <h2>
                    {list.title}
                  </h2>
                </figure>
              </article>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default Announcement;