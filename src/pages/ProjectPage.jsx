import { useParams } from "react-router-dom";
import Blure from "../Components/blure";
import AnimatedTitle from "../Components/AnimatedTitle";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Btn from "../Components/Btn";

import jsIcon from "/Icons/js.svg";
import htmlIcon from "/Icons/html.svg";
import reactIcon from "/Icons/react.svg";
import mongoDbIcon from "/Icons/mongoDb.svg";
import nodeIcon from "/Icons/node.svg";
import tailwindcssIcon from "/Icons/tailwindcss.svg";
import vercelIcon from "/Icons/vercel.svg";
import expressIcon from "/Icons/express.svg";

function ProjectPage() {
  const { id } = useParams();
  const data = [
    {
      id: "1aoaid",
      title: "MistralTips",
      description:
        "Description for MistralTips project lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero voluptatibus adipisci vel tempora corporis, culpa dignissimos velit voluptatem, tempore dicta ex nisi ut vitae. Aliquam ad corporis incidunt tempora",
      Img: ["/images/mistral.webp", "/images/mistral3.webp"],
      Link: "https://drive.google.com/file/d/1nixzvxt9ygPXHqp26FRhmd-Ovc1enuYb/view?usp=drive_link",
      githubLink: "https://github.com/KesraouiMohamed1991/MistralTips.git",
      Technology: [reactIcon, vercelIcon, expressIcon, nodeIcon, mongoDbIcon],
    },
    {
      id: "2dcjndj",
      title: "SkillHub",
      description:
        "Description for SkillHub project orem Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero voluptatibus adipisci vel tempora corporis, culpa dignissimos velit voluptatem, tempore dicta ex nisi ut vitae. Aliquam ad corporis incidunt tempora",
      Img: [
        "/images/skillhub.webp",
        "/images/skillhub.webp",
        "/images/skillhub.webp",
      ],
      Link: "/",
      githubLink: "https://github.com/KesraouiMohamed1991/SkillHub.git",
      Technology: [reactIcon, vercelIcon, expressIcon, nodeIcon, mongoDbIcon],
    },
    {
      id: "3sdjjdn",
      title: "Photography Portfolio",
      description:
        "Welcome to the Photography Portfolio project! This project is a React-based web application showcasing photography works in a portfolio format. It integrates react-router-dom for navigation and Framer Motion for animations, providing an engaging user experience.",
      Img: [
        "/images/photography00001.webp",
        "/images/photography00002.webp",
        "/images/photography00003.webp",
      ],
      Link: "https://photography-portfolio-mu.vercel.app/",
      githubLink:
        "https://github.com/KesraouiMohamed1991/Photography-portfolio.git",

      Technology: [reactIcon, tailwindcssIcon],
    },
    {
      id: "3sskkjdn",
      title: "Old Portfolio",
      description:
        "Welcome to the v-1 Portfolio project! This project is a html css web site showcasing programing works in a portfolio format. It integrates react-router-dom for navigation and Framer Motion for animations, providing an engaging user experience.",
      Img: [
        "/images/old00004.webp",
        "/images/old00002.webp",
        "/images/old00001.webp",
        "/images/old00003.webp",
      ],
      Link: "https://mypotfolio-iota.vercel.app/",
      githubLink: "https://github.com/KesraouiMohamed1991/Myportfolio.git",

      Technology: [jsIcon, htmlIcon, tailwindcssIcon],
    },
  ];

  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    setLoading(true);
    const currentProject = data.find(el => el.id === id);
    setProject(currentProject);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="min-h-screen   mx-auto sm:w-5/6 flex items-start justify-center text-red-50 flex-col w-full">
      {loading ? (
        <div className="h-full w-full mx-auto flex items-center justify-center">
          <p className="text-4xl"> Loading...</p>
        </div>
      ) : project ? (
        <>
          <div className="w-full mt-32  flex flex-col items-center justify-center p-4">
            <span className="text-lg py-4 overflow-hidden  sm:text-9xl font-extrabold">
              <AnimatedTitle text={project.title} />
            </span>

            {project.id === "2dcjndj" && (
              <p className="italic text-sm text-amber-400">
                This project is currently under development.
              </p>
            )}
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="sm:w-2/3 w-full py-4  selection:bg-purple-500 selection:text-white text-center text-sm sm:text-base"
            >
              {project.description}
            </motion.p>
            <div className="flex flex-col justify-center items-center">
              <p className="font-extrabold text-xl py-4 ">Technology used</p>
              <div className="flex items-center justify-center gap-2">
                {project.Technology.map((icon, index) => (
                  <img
                    key={icon}
                    src={icon}
                    alt={`Technology ${index}`}
                    className="w-16 object-contain h-16"
                  />
                ))}
              </div>
            </div>

            <br />
            <Blure position={"left-44"} />
          </div>

          <div className="  overflow-hidden w-3/4 mx-auto flex justify-center items-center gap-4 flex-wrap">
            {project.Img.map((e, i) => (
              <div
                key={i}
                className="overflow-hidden flex justify-center items-center  flex-wrap "
              >
                <motion.img
                  loading="lazy"
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * i }}
                  className="h-64 w-96  object-contain"
                  src={e}
                  alt=""
                />
              </div>
            ))}
          </div>

          <div className="w-full py-16 z-30 flex flex-col sm:flex-row items-center flex-wrap justify-center gap-4 px-8">
            <Btn url={project.Link} name={"See website"} />
            <Btn url={project.Link} name={"Go to Home page"} />
            <Btn url={project.githubLink} name={"See code"} />
          </div>
        </>
      ) : (
        <div>No project found.</div>
      )}
    </div>
  );
}

export default ProjectPage;
