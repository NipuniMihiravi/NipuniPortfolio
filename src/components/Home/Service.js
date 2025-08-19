import React from "react";
import "./Page.css";

const skillsData = [
  { category: "Frontend", name: "React", rating: 98 },
  { category: "Frontend", name: "HTML/CSS", rating: 95 },
  { category: "Backend", name: "Java", rating: 95 },
  { category: "Backend", name: "PHP", rating: 80 },
  { category: "Backend", name: "C#", rating: 60 },
  { category: "Database", name: "MongoDB", rating: 98 },
  { category: "Database", name: "MySQL", rating: 90 },
  { category: "Cloud", name: "Render", rating: 90 },
  {category: "Other Skills", name: "GitHub", rating: 85 },
   {category: "Other Skills", name: "Postman API Testing", rating: 95 },
   {category: "Other Skills", name: "CRUD Operation", rating: 95 },
   {category: "Methodology", name: "Agile with expertise in Scrum, MVC", rating: 95 },

];

const SkillsTable = () => {
  // Group skills by category
  const grouped = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (

  <div className="two-column-layout">
  <div>
       <div className="wording">
         <h1>Who I Am</h1>
       </div>
       <div className="wording2">
         <p>"Aspiring Full Stack Developer with a solid foundation in backend development and expertise in React for frontend technologies. Proficient in developing RESTful APIs, integrating databases, and implementing dynamic front-end functionalities. I am a Software Engineer with 1.5 years of self-employment experience, complemented by over 9 years of administrative work in an office environment. This unique combination of software engineering skills and deep knowledge of office operations allows me to create solutions that are not only technically robust but also highly practical for real-world business needs. My background enables me to bridge the gap between technical innovation and operational efficiency, resulting in better, more effective products that deliver tangible value."</p>
       </div>

       <div className="wording">
                <h1>Skill Analysis</h1>
              </div>

    <div className="skills-table-container">

      <table className="skills-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Skill</th>
            <th>
              <span class="rating-square"></span> (Possible) Rating →
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(grouped).map((category) => {
            const skills = grouped[category];
            return skills.map((skill, index) => (
              <tr key={skill.name}>
                {index === 0 && (
                  <td rowSpan={skills.length} className="category-cell">
                    {category}
                  </td>
                )}
                <td>{skill.name}</td>
                <td>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${skill.rating}%` }}
                    ></div>
                  </div>

                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>

    </div>
     </div>
     </div>
  );
};

export default SkillsTable;
