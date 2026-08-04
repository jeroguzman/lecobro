import { forwardRef } from 'react'
import './Team.css'
import teamData from '../data/team.json'
import teamImage1 from '../assets/team/1.jpeg'
import teamImage2 from '../assets/team/2.jpeg'
import teamImage3 from '../assets/team/3.jpeg'
import teamImage4 from '../assets/team/4.jpeg'
import teamImage5 from '../assets/team/5.jpeg'
import teamImage6 from '../assets/team/6.jpeg'
import teamImage7 from '../assets/team/7.jpeg'
import teamImage8 from '../assets/team/8.jpeg'

const teamImages = {
  1: teamImage1,
  2: teamImage2,
  3: teamImage3,
  4: teamImage4,
  5: teamImage5,
  6: teamImage6,
  7: teamImage7,
  8: teamImage8
}

const Team = forwardRef(function Team(props, ref) {
  const teamMembers = teamData.team

  return (
    <section className="team" ref={ref}>
      <div className="team-container">
        <h2 className="team-title">Nuestro Equipo</h2>
        <p className="team-subtitle">Conoce a los expertos detrás de lecobro.mx</p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className={`team-card team-card-${member.id}`}>
              <div className="team-image">
                <img src={teamImages[member.id]} alt={member.name} className="team-photo" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default Team
