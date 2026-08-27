import './Courses.css'

const PROGRAMS = [
  {
    level: 'Primary School',
    grades: 'Grades K–5',
    text: 'A nurturing foundation in literacy, numeracy, and inquiry-based learning that sparks curiosity from the very first day.',
    subjects: ['Reading & Phonics', 'Foundational Math', 'Creative Arts', 'Social-Emotional Learning'],
  },
  {
    level: 'Middle School',
    grades: 'Grades 6–8',
    text: 'A broadened curriculum that builds independence, critical thinking, and study skills as students transition to adolescence.',
    subjects: ['Pre-Algebra & Algebra', 'Life & Earth Science', 'World History', 'Introductory Coding'],
  },
  {
    level: 'High School',
    grades: 'Grades 9–12',
    text: 'A college-preparatory track featuring Honors and Advanced Placement courses across every core discipline.',
    subjects: ['AP & Honors Courses', 'Advanced Sciences', 'Calculus & Statistics', 'College Counseling'],
  },
]

const ELECTIVES = [
  {
    title: 'STEM & Robotics',
    text: 'Hands-on engineering, coding, and competitive robotics starting in Grade 6.',
    icon: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
  },
  {
    title: 'Visual & Performing Arts',
    text: 'Studio art, band, choir, and theater productions staged every semester.',
    icon: <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />,
  },
  {
    title: 'World Languages',
    text: 'Spanish, French, and Mandarin offered from Grade 3 through AP level.',
    icon: <path d="M3 5h12M9 3v2M12 5c0 4.5-3 8-7 9M6 9c1.5 2 4 3.5 7 4M21 21l-4-9-4 9M14.5 18h5" />,
  },
  {
    title: 'Athletics & Physical Education',
    text: 'Twelve varsity sports and a fitness curriculum focused on lifelong wellness.',
    icon: <path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" />,
  },
]

function Courses() {
  return (
    <section id="academics" className="section academics section--soft">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Academics</span>
          <h2>A Curriculum Built for Every Stage</h2>
          <p className="section-lede">
            From foundational literacy to Advanced Placement coursework, our
            program is designed to challenge and support students at every
            step of their K&ndash;12 journey.
          </p>
        </div>

        <div className="programs">
          {PROGRAMS.map((program) => (
            <div className="program-card" key={program.level}>
              <span className="program-card__grades">{program.grades}</span>
              <h3>{program.level}</h3>
              <p>{program.text}</p>
              <ul>
                {program.subjects.map((subject) => (
                  <li key={subject}>{subject}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-head" style={{ marginTop: '72px' }}>
          <span className="eyebrow">Beyond the Classroom</span>
          <h2>Signature Programs &amp; Electives</h2>
        </div>

        <div className="electives">
          {ELECTIVES.map((elective) => (
            <div className="elective-card" key={elective.title}>
              <span className="elective-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {elective.icon}
                </svg>
              </span>
              <div>
                <h3>{elective.title}</h3>
                <p>{elective.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
