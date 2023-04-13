const softSkills = [
  {
    content: 'Attention to detail',
  },
  {
    content: 'Communication',
  },
  {
    content: 'Confidence',
  },
  {
    content: 'Creative',
  },
  {
    content: 'Flexibility',
  },
  {
    content: 'Empathic',
  },
  {
    content: 'Friendly',
  },
  {
    content: 'Problem Solving',
  },
  {
    content: 'Self Management',
  },
  {
    content: 'Sociable',
  },
  {
    content: 'Team Work',
  },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="soft-skills-section">
      <div className="soft-skill-box">
        <h3 className="soft-skills-title">Soft Skills</h3>
        <p className="soft-skills">
          {softSkills.map((item, key) => (
            <span key={key} className="soft-skill">
              {item.content}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default SoftSkills;
