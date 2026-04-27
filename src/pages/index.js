import Link from '@docusaurus/Link';
import React from 'react';
import {profile} from '../data/profile';

export default function Home() {
  return (
    <main className="page-main">
      <header className="hero">
        <div className="hero__backdrop" />
        <div className="hero__content">
          <p className="eyebrow">Quality Engineering Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero__lede">{profile.tagline}</p>
          <div className="hero__actions">
            {profile.links.map((link) => (
              <a
                className="button-link"
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <dl className="hero__stats">
            {profile.highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.value}</dt>
                <dd>{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section className="section section--intro">
        <div className="section__heading">
          <p className="section__label">About</p>
          <h2>Focused on turning quality into a visible engineering advantage.</h2>
        </div>
        <div className="card card--feature">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <div className="section__heading">
            <p className="section__label">Experience</p>
            <h2>Selected roles and delivery areas.</h2>
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
        </div>

        <aside>
          <div className="section__heading">
            <p className="section__label">Skills</p>
            <h2>Tools and domains used in production.</h2>
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
        </aside>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__label">Latest Writing</p>
          <h2>Thoughts on testing, automation, and quality engineering.</h2>
        </div>
        <p className="section-action">
          <Link className="button-link button-link--solid" to="/blog">
            View all posts
          </Link>
        </p>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="section__label">Contact</p>
          <h2>Ways to connect, collaborate, or book time.</h2>
        </div>
        <div className="contact-grid">
          {profile.contact.map((item) => (
            <article className="contact-card" key={item.label}>
              <span className="contact-card__label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.text}
                </a>
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
