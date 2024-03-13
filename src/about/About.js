

const About = ({ title, body, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={link}>Learn more</a>
    </div>
  );
};

export default About;