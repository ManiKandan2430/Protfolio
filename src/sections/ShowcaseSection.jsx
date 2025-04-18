import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../index.css";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PreviewIcon from "@mui/icons-material/Preview";
import Tooltip from "@mui/material/Tooltip";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  const projects = [
    {
      title: "EduSync: Smart Notes & Books Hub",
      description:
        "an admin-exclusive web application designed to efficiently manage, issue, and track academic books and notes within educational institutions.",
      image: "/images/project1.png",
      createBy: "Full Stack MERN",
      gitub: "https://github.com/ManiKandan2430/EduSync-Smart-Notes-Books-Hub",
      linkedin: "https://www.linkedin.com/in/manikandan-s-9632742a8/",
      preview: "https://edusync-smart-notes-books-hub.onrender.com/",
    },
    {
      title: "Dream Movies",
      description:
        "Explore a wide variety of movies and discover detailed information about each one. ",
      image: "/images/project2.png",
      createBy: "React Frame work",
      gitub: "https://github.com/ManiKandan2430/DreamMovies",
      linkedin: "https://www.linkedin.com/in/manikandan-s-9632742a8/",
      preview: "https://dream-movies.onrender.com/",
    },
    {
      title: "AspirePro Job Search",
      description:
        "AspirePro is a modern and intuitive job search platform designed to connect ambitious professionals with their dream opportunities.",
      image: "/images/project3.png",
      createBy: "Full Stack MERN",
      gitub: "https://github.com/ManiKandan2430/AspirePro",
      linkedin: "https://www.linkedin.com/in/manikandan-s-9632742a8/",
      preview: "https://aspirepro.onrender.com/",
    },
    {
      title: "Project Four",
      description: "This is a short description of project four.",
      image: "/images/project4.png",
      link: "https://example.com/project4",
    },
    {
      title: "Project Five",
      description: "This is a short description of project five.",
      image: "/images/project5.png",
      link: "https://example.com/project5",
    },
    {
      title: "Project Six",
      description: "This is a short description of project six.",
      image: "/images/project6.png",
      link: "https://example.com/project6",
    },
  ];

  const renderCard = (project, i) => (
    <StyledWrapper>
      <div
        key={i}
        ref={(el) => (cardRefs.current[i] = el)}
        className="cards relative overflow-hidden text-white"
      >
        <div className="card">
          <div className="card-img"></div>
          <div className="card-content">
            <span className="border-span top-0 right-0 h-[3px] w-full animate-animate1"></span>
            <span className="border-span top-0 right-0 w-[3px] h-full animate-animate2 delay-[1s]"></span>
            <span className="border-span -bottom-20 right-0 h-[3px] w-full animate-animate3"></span>
            <span className="border-span top-0 left-0 w-[3px] h-full animate-animate4 delay-[1s]"></span>
            <img src={project.image} alt={project.title} className="" />
            <h3 className="title">{project.title}</h3>
            <p className="subtitle leading-8 mt-3">{project.description}</p>
            <span
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              <li typeof="circle" className="lg:mt-5 mt-2">
                {project.createBy}
              </li>
            </span>
          </div>
          <ul className="social-media">
            <li>
              <a href={project.gitub}>
                <Tooltip title="Gitub">
                  <GitHubIcon />
                </Tooltip>
              </a>
            </li>
            <li>
              <a href={project.linkedin}>
                <Tooltip title="linked">
                  <LinkedInIcon />
                </Tooltip>
              </a>
            </li>
            <li>
              <a href={project.preview}>
                <Tooltip title="preview">
                  <PreviewIcon />
                </Tooltip>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="grid-3-cols">
          {projects.slice(0, 3).map((project, i) => renderCard(project, i))}
        </div>
        {/* <div className="grid-3-cols mt-10">
            {projects.slice(3, 6).map((project, i) => renderCard(project, i + 3))}
          </div> */}
      </div>
    </section>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 450px;
    position: relative;
    background: black;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
    line-height: 150%;
    box-shadow: 0px 10px 20px rgba(80, 80, 80, 0.2);
    transition: box-shadow 0.3s ease-in-out;
  }

  .card-img {
    background: url("/images/default.jpg"); /* Optional default background */
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    transition: filter 0.4s ease-in-out, transform 0.3s ease-in-out;
  }

  .card:hover .card-img {
    filter: blur(4px) brightness(0.8); /* 🔥 Your blur effect */
    transform: scale(1.05); /* Optional smooth zoom */
  }

  .card-content {
    position: relative;
    z-index: 2;
    padding: 1.5rem;
  }

  .social-media {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(30px);
    display: flex;
    gap: 15px;
    z-index: 3;
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }

  .social-media li {
    list-style: none;
    background: rgba(255, 255, 255, 0.15);
    padding: 10px;
    border-radius: 50%;
    backdrop-filter: blur(5px);
    color: #fff;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .card:hover .social-media {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .card:hover .social-media li:hover {
    transform: scale(1.1);
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
  }

  .subtitle {
    font-size: 0.95rem;
    color: #ccc;
  }
`;

export default ShowcaseSection;
