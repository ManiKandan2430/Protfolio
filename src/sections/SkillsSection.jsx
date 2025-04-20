import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import BackgroundParticles from "../components/HeroModels/BackgroundParticles";

const skills = [
  {
    role: "Frontend",
    title: "Frontend Development",
    imgPath: "/images/logos/react.png",
    technologies: [
      "React.js",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
    ],
  },
  {
    role: "Backend",
    title: "Backend Development",
    imgPath: "/images/logos/node.png",
    technologies: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Middleware",
      "JavaScript (ES6+)",
    ],
  },
  {
    role: "Database",
    title: "Database Management",
    imgPath: "/images/logos/mongoDB.png",
    technologies: [
      "MongoDB",
      "Mongoose ODM",
      "NoSQL",
      "Schema Design",
      "Data Modeling",
      "Aggregation Framework",
    ],
  },
];

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const timelinesRef = useRef([]);

  useGSAP(() => {
    timelinesRef.current.forEach((timeline) => {
      gsap.fromTo(
        timeline,
        { scaleY: 1 },
        {
          scaleY: 0,
          ease: "power1.inOut",
          transformOrigin: "bottom",
          scrollTrigger: {
            trigger: timeline,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
    gsap.utils. toArray('.expText').forEach((text)=>{
        gsap.from(text,{
            xPercent: 100,
            opacity:0,
            transformOrigin:'left left',
            duration:1,
            ease:'power1.inOut',
            scrollTrigger:{
                trigger:text,
                start:'top 80%'
            }
        })
    })
  }, []);

  return (
    <>
      <div id="skills" className="flex justify-center items-center">
        <span className="font-semibold lg:text-3xl text-lg text-white-50">My Skills</span>
      </div>
      <section id="experience" className="w-full md:mt-40 mt-20">
        <div className="flex justify-center items-center">
          <div className="items-center">
            {skills.map((skill, index) => (
              <>
                <div className="timeline-wrapper">
                  <div
                    className="timeline"
                    ref={(el) => (timelinesRef.current[index] = el)}
                  />
                  <div className="gradient-line lg:h-[65%] h-[70%] mt-[10px]" />
                </div>
                <div className="flex relative z-20">
                  <div className="timeline-logo">
                    <img src={skill.imgPath} alt={skill.role} />
                  </div>
                  <div className="ml-5 expText">
                    <h1 className="font-semibold lg:text-3xl mt-4">
                      {skill.title}
                    </h1>
                    <ul className="list-disc ms-5 mt-5 ml-14 flex flex-col gap-5 text-white-50">
                      {skill.technologies.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default SkillsSection;
