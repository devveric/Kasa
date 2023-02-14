import React from "react";
import accomodation from '../data/Data';
import { Link } from "react-router-dom";
import '../style/Announcement.css';

const Announcement = () => {
  return (
    <div className="container_announcement">
      {
        accomodation.map(data => {
          return (
            <div className="bloc_announcement">
              <Link to={data.id}>
                <article className="bloc_announcement-img">
                  <img src={data.cover} alt="annonces" />
                  <figure className="bloc_announcement-title">
                    <h2>
                      {data.title}
                    </h2>
                  </figure>
                </article>
              </Link>
            </div>
          );
        })
      }
    </div>
  );
};

export default Announcement;