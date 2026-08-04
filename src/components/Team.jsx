import { forwardRef } from 'react'
import './Team.css'
import teamData from '../data/team.json'

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
                {member.image ? (
                  <img src={member.image} alt={member.name} />
                ) : (
                  <div className="team-placeholder">
                    <span>Foto</span>
                  </div>
                )}
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
