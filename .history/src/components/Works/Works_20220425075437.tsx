import Image from "next/image";
import tigyImg from 'static/images/tigyapp_web_image.jpg'
import oldCaImg from 'static/images/ca_web_image.jpg'
import caImg from 'static/images/nextca_web_image.jpg'
import ppastriesImg from 'static/images/ppastries_web_image.jpg'
import softarsImg from 'static/images/softars_web_image.jpg'
import minamiImg from 'static/images/minami_web_image.jpg'
import minamiCareersImg from 'static/images/minami_careers_web_image.jpg'
import fonselpImg  from 'static/images/fonselp_web_image.jpg'

const works = [
  {
      name: "Tigy Web App",
      description: "A Web App like a Social Network to share help to others",
      type: "Web App",
      version: "1.0",
      technologies: "React + Hooks, Redux, React Router Dom, CSS/3, HTML/5, Javascript",
      from: "2018",
      to: "2019",
      present: false,
      image: tigyImg,
      website: "https://tigyweb.tigyapp.com",
      alternativeWebsite: "",
      cowork: true,
      coworker: "Jorge Rodriguez",
      coworkerWebsite: 'https://www.jorgegwd.com'
  },{
      name: "Coanime.net",
      description: "A little CMS to Blogging and a little Wiki of the Geek, Manga/Anime World.",
      type: "Web App",
      version: "2.8",
      technologies: "PHP 7.2, Laravel 5.3, CSS/3, HTML/5, Javascript, JQuery, Relational Database(MySQL).",
      from: "2007",
      to: "",
      present: true,
      image: oldCaImg,
      website: "https://coanime.net",
      alternativeWebsite: "",
      cowork: false,
      coworker: "",
      coworkerWebsite: ''
  },{
      name: "New Version of Coanime.net",
      description: "A little CMS to Blogging and a little Wiki of the Geek, Manga/Anime World.",
      type: "Web App",
      version: "3.0",
      technologies: "PHP 7.3, Laravel 6, VueJS+Blade, CSS3, HTML5, Javascript, Relational Database(MySQL/MariaDB).",
      from: "2019",
      to: "",
      present: true,
      image: caImg,
      website: "https://next.coanime.net",
      alternativeWebsite: "",
      cowork: false,
      coworker: "Nelson Martell",
      coworkerWebsite: 'https://nelson6e65.github.io/'
  },{
      name: "Praline Pastries",
      description: "A website to show Pastries Products.",
      type: "Web App",
      version: "1.0",
      technologies: "PHP 5.6, Laravel 4.2, CSS/3, HTML/5, Javascript, JQuery",
      from: "08/2015",
      to: "09/2015",
      present: false,
      image: ppastriesImg,
      website: "https://praline.craftersama.com",
      alternativeWebsite: "",
      cowork: true,
      coworker: "Pamax Outsourcing, C.A",
      coworkerWebsite: 'https://www.instagram.com/pamaxoutsourcing'
  },{
      name: "Softars Website",
      description: "A Website for the company.",
      type: "Web App",
      version: "2.0",
      technologies: "React, CSS/3, HTML/5, Javascript",
      from: "2019",
      to: "2019",
      present: false,
      image: softarsImg,
      website: "https://softars.com/",
      alternativeWebsite: "",
      cowork: true,
      coworker: "Jorge Rodriguez",
      coworkerWebsite: 'https://www.jorgegwd.com'
  },{
      name: "Old Version of Minami Digital Website",
      description: "A Website for the company.",
      type: "Web App",
      version: "No info",
      technologies: "CSS/3, HTML/5, Javascript",
      from: "2018",
      to: "2019",
      present: false,
      image: minamiImg,
      website: "https://minami.coanime.net",
      alternativeWebsite: "",
      cowork: false,
      coworker: ""
  }, {
      name: "Old Version of Careers for Minami Digital Website",
      description: "The Careers Website for the company.",
      type: "Web App",
      version: "No info",
      technologies: "CSS/3, HTML/5, Javascript",
      from: "2018",
      to: "2019",
      present: false,
      image: minamiCareersImg,
      website: "https://minami.coanime.net/careers/",
      alternativeWebsite: "",
      cowork: false,
      coworker: ""
  }, {
      name: "Fonselp Landing Page Version",
      description: "A Fonselp Landing Page.",
      type: "Web App",
      version: "No info",
      technologies: "CSS/3, HTML/5, Javascript",
      from: "2018",
      to: "2019",
      present: false,
      image: fonselpImg,
      website: "https://fonselp.coanime.net",
      alternativeWebsite: "",
      cowork: true,
      coworker: "https://minami.digital"
  }]
const Works = () => {
  return (
      <section id="works">
          <div className="container">
              <div className="experience-section works-section">
                  <h3 className="skills-title">Portfolio</h3>
                  <div className="works-container">
                      {works.map((item, index) => (
                          <div key={index} className="works-box">
                              <figure className="works-image">
                                  <Image src={item.image} alt={item.name} width="190px" height="140px"/>
                              </figure>
                              <div className="works-box-info">
                                  <h3 className="works-title">{item.name}</h3>
                                  <p className="works-description">
                                      {item.description}
                                  </p>
                                  <div className="works-technologies">
                                      {item.technologies}
                                  </div>
                                  <a href={item.website}>{item.website}</a>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
    </section>
  );
}

export default Works;
