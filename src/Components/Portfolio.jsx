/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI based T-shirt Designer",
    description:
      "Created a T-shirt Designer application integrating the OpenAI API, allowing users to ask AI to create T-shirt designs for them.",
    url: "https://github.com/Jinesh-Jain1507/AI-T-Shirt-Designer",
  },
  {
    title: "Emergency Ambulance Booking System",
    description:
      "Created an emergency ambulance booking system with two types of users: Hospitals and Patients. Hospitals can register ambulances while users can book the ambulance according to location.",
    url: "https://github.com/Jinesh-Jain1507/AmbulanceAid",
  },
  {
    title: "Blog Website",
    description:
      "Created a blog website where users can log in and start writing blogs. They can also update and delete their blogs.",
    url: "https://github.com/Jinesh-Jain1507/Blog",
  },
  {
    title: "Resume Website",
    description:
      "Created a Simple Resume for freshers with no experience created using HTML and CSS",
    url: "https://jinesh-jain1507.github.io/Basic-Resume/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
