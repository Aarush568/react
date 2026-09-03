export const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export const NEWS = [
  {
    date: 'August 18, 2026',
    category: 'Achievement',
    title: 'Robotics Team Wins Regional Championship',
    text: 'The Northbridge Robotics Club took first place at the Connecticut State Robotics Invitational, advancing to nationals in October.',
    body: [
      'A team of twelve students spent the summer designing, building, and programming this year’s competition robot, "Ironclad," which outscored fourteen other schools in the final bracket at the Connecticut State Robotics Invitational held in New Haven.',
      'Team captain and senior Maya Chen credited months of after-school practice and a rebuilt autonomous navigation routine for the win: "We rewrote our sensor code three times before it finally worked reliably on competition day."',
      'The club now advances to the national championship in Dallas this October, and is fundraising to help cover travel costs for all twelve members and their coach, Mr. Alvarez.',
    ],
  },
  {
    date: 'August 10, 2026',
    category: 'Campus',
    title: 'New STEM Wing Opens for the Fall Semester',
    text: 'Our newly built STEM wing features three research-grade laboratories and a dedicated robotics and engineering workshop.',
    body: [
      'After eighteen months of construction, the new 12,000-square-foot STEM wing opened its doors this week with a ribbon-cutting ceremony attended by students, faculty, and members of the Hartford school board.',
      'The building houses three research-grade science labs, a dedicated robotics and engineering workshop, and a flexible maker-space for interdisciplinary projects, replacing facilities that had not been upgraded since the 1990s.',
      'Principal Dana Whitfield said the wing was made possible by a combination of district funding and a capital campaign led by the Northbridge Parents Association, which raised over $600,000 toward the project.',
    ],
  },
  {
    date: 'July 29, 2026',
    category: 'Community',
    title: 'Annual Charity Drive Raises Record Funds',
    text: 'Students and families came together to raise over $42,000 for local children’s charities during this year’s spring drive.',
    body: [
      'This year’s spring charity drive brought in $42,300, the highest total in the event’s eleven-year history, surpassing last year’s record by nearly $9,000.',
      'Proceeds will be split between the Hartford Children’s Relief Fund and the regional Boys & Girls Club, both of which provide after-school programs and emergency family support services.',
      'Student government organized bake sales, a fun run, and a talent show over three weeks to reach the total, with more than 400 students participating in at least one event.',
    ],
  },
  {
    date: 'July 15, 2026',
    category: 'Athletics',
    title: 'Varsity Soccer Advances to State Finals',
    text: 'The varsity soccer team closed out an undefeated regular season and will compete for the state title this September.',
    body: [
      'The Northbridge varsity soccer team finished the regular season 14-0-2, clinching the conference title outright for the second year in a row.',
      'Senior forward Owen Marsh led the team with 22 goals on the season, while the defense, anchored by co-captains Priya Nair and Diego Ramos, allowed just six goals in sixteen games.',
      'The Falcons will face Eastbrook Regional in the Connecticut State Finals this September at Rentschler Field, with tickets available through the athletics office starting next month.',
    ],
  },
]

export const EVENTS = [
  { date: 'SEP 12', title: 'Fall Open House', time: '9:00 AM – 12:00 PM' },
  { date: 'SEP 26', title: 'Parent-Teacher Conferences', time: '1:00 PM – 6:00 PM' },
  { date: 'OCT 08', title: 'College Fair for Juniors & Seniors', time: '4:00 PM – 7:00 PM' },
  { date: 'OCT 24', title: 'Homecoming & Alumni Weekend', time: 'All Day' },
]
