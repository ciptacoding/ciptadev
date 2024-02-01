import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Mobile Application",
    icon: "bi bi-phone",
    desc: "These apps are typically developed for specific operating systems, such as iOS for Apple devices or Android for a wide range of smartphones.",
  },
  {
    id: 2,
    name: "Web Application",
    icon: "bi bi-globe2",
    desc: "Web apps can be accessed on various platforms, including desktops, laptops, and mobile devices, as long as they have a compatible web browser.",
  },
  {
    id: 3,
    name: "Desktop Application",
    icon: "bi bi-laptop",
    desc: "Desktop apps are installed and run directly on the user's computer, utilizing the device's operating system for execution.",
  },
  {
    id: 4,
    name: "Product Innovation",
    icon: "bi bi-columns",
    desc: "Product innovation refers to the implementation of new or significantly improved products or processes that bring value to customers.",
  },
  {
    id: 5,
    name: "Private Course",
    icon: "bi bi-distribute-vertical",
    desc: "Tutors can create a curriculum tailored to the student's goals, whether it's exam preparation, skill development, or academic enrichment.",
  },
  {
    id: 6,
    name: "Career Development",
    icon: "bi bi-triangle",
    desc: "Identifying strengths, weaknesses, and interests. Self-assessment helps individuals align their career choices with their personal attributes.",
  },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
