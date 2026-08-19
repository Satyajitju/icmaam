import React from "react";
import { Link } from "react-router-dom";

function FeaturedSpeakers() {
  const speakers = [
    
    {
      name: "Gaston N'Guerekata",
      title: "Distinguished Professor",
      institution: "Morgan State University",
      country: "USA",
      image: "/Copy of nguerekata_gaston_massey98.jpg",
    },
    {
      name: "Raluca Eftimie",
      title: "Professor",
      institution: "University of Franche-Comté",
      country: "France",
      image: "/raluca.png",
    },
    {
      name: "Frantisek Stepanek",
      title: "Professor",
      institution: "University of Chemistry and Technology Prague",
      country: "Czech Republic",
      image: "/František-Štěpánek.jpg",
    },
    {
      name: "David Greenhalgh",
      title: "Professor",
      institution: "University of Strathclyde",
      country: "United Kingdom",
      image: "/David image.jpg",
    },
  ];

  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <h2>Featured International Speakers</h2>

          <p className="section-sub">
            A selection of distinguished researchers who have already
            confirmed their participation in ICMAAM 2026.
          </p>
        </div>

        <div className="featured-speaker-grid">

          {speakers.map((speaker, index) => (
            <div className="featured-speaker-card" key={index}>

              <img
                src={speaker.image}
                alt={speaker.name}
                className="featured-speaker-image"
              />

              <div className="featured-speaker-content">

                <h3>{speaker.name}</h3>

                <p className="featured-speaker-title">
                  {speaker.title}
                </p>

                <p className="featured-speaker-inst">
                  {speaker.institution}
                </p>

                <span className="featured-speaker-country">
                  {speaker.country}
                </span>

              </div>

            </div>
          ))}

        </div>

        <div className="featured-speaker-action">

          <Link
            to="/speakers"
            className="btn btn-primary"
          >
            View All Speakers
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedSpeakers;
