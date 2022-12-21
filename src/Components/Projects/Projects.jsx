import React, { useContext } from "react";
import styles from "./Project.module.css";
import ProjectCard from "./ProjectCard";
import licious from "../../Assets/ProjectImages/LiciousImg.PNG";
import rodan from "../../Assets/ProjectImages/rodanandfield.PNG";
import weatherApp from "../../Assets/ProjectImages/weatherApp.PNG";
import stylecraze from "../../Assets/ProjectImages/stylecraze.PNG";
import care_at_home from "../../Assets/ProjectImages/care_at_home.png";
import tweeter_app from "../../Assets/ProjectImages/tweeter_app.png";
import { ScrollContext } from "../../Context/ScrollContext";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Care At Home",
      description:
        "CareAtHome is an online platform that provides dependable and high-quality service at your home.",
      type: "A collaborative project executed in 5 days with 4 teammates.",
      features: "Main features are Login,SignUp,Cart,Location handling",
      ProjectImg: care_at_home,
      github_repo: "https://github.com/pragati-tripathi05/Care-At-Home",
      live_link: "https://care-at-home-mauve.vercel.app/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          toolName: "ReactJs",
        },
        {
          toolImg:
            "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png",
          toolName: "Chakra-Ui",
        },
        {
          toolImg:
            "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
          toolName: "Redux",
        },
        {
          toolImg:
            "https://www.pngitem.com/pimgs/m/385-3850359_icon-mongodb-logo-hd-png-download.png",
          toolName: "MongoDb",
        },
        {
          toolImg:
            "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
          toolName: "Express Js",
        },
        {
          toolImg:
            "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
          toolName: "NodeJs",
        },
      ],
    },
    {
      id: 2,
      title: "Tweeter App",
      description:
        "Tweeter is an online multiuser tweet posting site where users can post tweets with gifs and see each other's posts.",
      type: "It was an individual project executed within 5 days.",
      features:
        "Main features are Authentication,Authorization,CRUD operations",
      ProjectImg: tweeter_app,
      github_repo: "https://github.com/Md-Gulzeesh/Tweeter",
      live_link: "https://tweeter-app-adv.netlify.app/",
      toolsData: [
        {
          toolImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          toolName: "ReactJs",
        },
        {
          toolImg:
            "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png",
          toolName: "Chakra-Ui",
        },
        {
          toolImg:
            "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
          toolName: "Redux",
        },
        {
          toolImg:
            "https://assets-global.website-files.com/5aa7081220a301f2a3644f3b/5f493b167e5dc864a0265b30_json-logo.png",
          toolName: "JSON-server",
        },
        {
          toolImg:
            "data:image/jpeg;base64,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",
          toolName: "BcryptJs",
        },
      ],
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
  const { project } = useContext(ScrollContext);
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
