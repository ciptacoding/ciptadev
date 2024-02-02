import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "React", icon: "fab fa-react" },
  { id: 2, name: "Vue", icon: "fab fa-vuejs" },
  { id: 3, name: "Node JS", icon: "fab fa-node-js" },
  { id: 4, name: "Laravel", icon: "fab fa-laravel" },
  { id: 5, name: "Database Sql", icon: "fas fa-database" },
  { id: 6, name: "Mobile Apps", icon: "fas fa-mobile-alt" },
];
const experiencesData = [
  {
    id: 1,
    date: "Sep 2022 - Jan 2023",
    designation: "Web Developer - Internship",
    company: "STIKOM Bali",
  },
  {
    id: 2,
    date: "Jan 2023 - Jul 2023",
    designation: "Software Engineer - Internship",
    company: "PT. GITS Indonesia",
  },
  {
    id: 3,
    date: "Jul 2023 - Present",
    designation: "Self Employed - Part Time",
    company: "Neotera Technology",
  },
  {
    id: 4,
    date: "Nov 2023 - Present",
    designation: "Software Engineer - Full Time",
    company: "PT. Bima Sakti Alterra",
  },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience"}
              text={
                "I have experience in the field of software engineering for almost 2 years."
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/hireme.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
