import React, { useContext } from "react";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import licious from "../../Assets/ProjectImages/LiciousImg.PNG";
import rodan from "../../Assets/ProjectImages/rodanandfield.PNG";
import weatherApp from "../../Assets/ProjectImages/weatherApp.PNG";
import stylecraze from "../../Assets/ProjectImages/stylecraze.PNG";
import { ScrollContext } from "../../Context/ScrollContext";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Licious.in Clone",
      description:
        "Licious is an online fresh meat Ordering shop. It provides all non- vegetarian food. ",
      type: "An individual project executed in 5 days",
      features: "Main features are Authentication and Location handling",
      ProjectImg: licious,
      github_repo:
        "https://github.com/Md-Gulzeesh/hardy-mouth-2466/tree/main/licios-clone",
      live_link: "https://clever-praline-d97d48.netlify.app/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          toolName: "ReactJs",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
          toolName: "Js",
        },
        {
          toolImg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
          toolName: "HTML",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
          toolName: "CSS",
        },
        {
          toolImg:
            "https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667",
          toolName: "React Icons",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png",
          toolName: "BootStrap",
        },
        {
          toolImg:
            "https://assets-global.website-files.com/5aa7081220a301f2a3644f3b/5f493b167e5dc864a0265b30_json-logo.png",
          toolName: "Json Server",
        },
      ],
    },
    {
      id: 2,
      title: "Rodanandfields.com Clone",
      description:
        "This is an e-commerce site that sells women's beauty products.",
      type: "A collaborative project executed in 5 days with 5 teammates.",
      features: "Main features are Login,SignUp and Carousel",
      ProjectImg: rodan,
      github_repo: "https://github.com/RishiRanjan-01/RodanFields",
      live_link: "https://melodic-vacherin-ce56be.netlify.app/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
          toolName: "Js",
        },
        {
          toolImg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
          toolName: "HTML",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
          toolName: "CSS",
        },
        {
          toolImg: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          toolName: "GitHub",
        },
        {
          toolImg:
            "https://assets-global.website-files.com/5aa7081220a301f2a3644f3b/5f493b167e5dc864a0265b30_json-logo.png",
          toolName: "Json Server",
        },
      ],
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A weather App which shows the real-time weather report according to the location. ",
      type: "An individual project executed in 5 days",
      features:
        "Main features are location fetching with map and real-time weather report.",
      ProjectImg: weatherApp,
      github_repo: "https://github.com/Md-Gulzeesh/Weather-app",
      live_link: "https://weather-app-with-embedded-map.netlify.app/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
          toolName: "Js",
        },
        {
          toolImg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
          toolName: "HTML",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
          toolName: "CSS",
        },
        {
          toolImg:
            "https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android-app-top-banner.png",
          toolName: "Open Weather",
        },
        {
          toolImg:
            "https://cdn.vox-cdn.com/thumbor/KqYnd6YgxZ6yJvyBCk-heGXYEMM=/0x0:1280x800/1400x1400/filters:focal(640x400:641x401)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png",
          toolName: "Google Map",
        },
      ],
    },
    {
      id: 4,
      title: "Stylecraze.com Clone",
      description:
        "Stylecrazewebsite is a women's beauty and health tips website. Here you can get tips related to beauty and health.",
      type: "A collaborative project executed in 5 days with 4 teammates.",
      features: "Main features are hyperlink of pages,good UI",
      ProjectImg: stylecraze,
      github_repo: "https://github.com/srbhkumar624/stylecrazewebsite",
      live_link: "https://srbhkumar624.github.io/stylecrazewebsite/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
          toolName: "Js",
        },
        {
          toolImg: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
          toolName: "HTML",
        },
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
          toolName: "CSS",
        },
      ],
    },
  ];
  const { project } =
    useContext(ScrollContext);
  return (
    <section ref={project} id={styles["project"]}>
        {/* <h4 className={styles.projectHeading}>My Work</h4> */}
        <h1 className={styles.projectHeading}>My Projects</h1>
        <hr />
        <div className={styles.projectCardDiv}>
          {projectData.map((elem) => (
            <ProjectCard
              key={elem.id}
              ProjectImg={elem.ProjectImg}
              title={elem.title}
              description={elem.description}
              type={elem.type}
              features={elem.features}
              github_repo={elem.github_repo}
              live_link={elem.live_link}
              toolsData={elem.toolsData}
              />
          ))}
        </div>
    </section>
  );
};

export default Projects;
