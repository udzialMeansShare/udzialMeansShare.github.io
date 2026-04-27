import React from 'react';
import {profile} from '../data/profile';

export default function ProfilePage() {
  return (
    <main className="page-main page-main--narrow">
      <section className="section section--intro">
        <div className="section__heading">
          <p className="section__label">Tester Profile</p>
          <h1>{profile.name}</h1>
          <p>{profile.role}</p>
        </div>
        <div className="card card--feature">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__label">Experience</p>
          <h2>Career Snapshot</h2>
        </div>
        <div className="timeline">
          {profile.experience.map((role) => (
            <article className="timeline__item" key={`${role.company}-${role.role}`}>
              <div className="timeline__body">
                <p className="timeline__period">{role.period}</p>
                <h3 className="timeline__title">{role.role}</h3>
                <p className="timeline__company">{role.company}</p>
                <ul className="timeline__list">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__label">Skills</p>
          <h2>Tools and Strength Areas</h2>
        </div>
        <div className="card">
          <div className="skills-grid">
            {profile.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
