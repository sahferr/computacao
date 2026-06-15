import { useEffect, useState } from "react";
import { TechPanel } from "./TechPanel.jsx";

export function RoadmapDetail({ area, hasResults, copy }) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  useEffect(() => {
    setActivePhaseIndex(0);
  }, [area.id]);

  function showNextPhase() {
    setActivePhaseIndex((current) => (current + 1) % area.phases.length);
  }

  function showPreviousPhase() {
    setActivePhaseIndex(
      (current) => (current - 1 + area.phases.length) % area.phases.length,
    );
  }

  if (!hasResults) {
    return (
      <section className="content" aria-live="polite">
        <div className="empty active">{copy.search.empty}</div>
      </section>
    );
  }

  return (
    <section className="content" aria-live="polite">
      <article className={`area-detail area-color-${area.id}`}>
        <div className="area-heading">
          <div>
            <h2>
              <span aria-hidden="true">{area.icon}</span> {area.title}
            </h2>
            <p>{copy.detail.description}</p>
          </div>
          <span className="pill">{copy.detail.phaseCount}</span>
        </div>

        <TechPanel />

        <div className="phases" style={{ "--active-phase": activePhaseIndex }}>
          {area.phases.map((phase, index) => (
            <details
              className={`phase phase-color-${index + 1}`}
              data-stack-position={(index - activePhaseIndex + area.phases.length) % area.phases.length}
              key={phase.title}
              open
            >
              <summary>
                <span className="phase-number">{index + 1}</span>
                <span className="phase-title">
                  <b>{copy.detail.phaseTitle(index, phase.title)}</b>
                  <span>{copy.detail.topicCount(phase.topics.length)}</span>
                </span>
              </summary>

              <div className="phase-content">
                <div className="topics">
                  {phase.topics.map((topic) => (
                    <div className="topic" key={topic}>
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
        <div className="phase-controls">
          <button
            className="phase-nav phase-prev"
            type="button"
            aria-label={copy.detail.previousPhase}
            onClick={showPreviousPhase}
          >
            <span aria-hidden="true">‹</span>
            <span>Anterior</span>
          </button>
          <button
            className="phase-nav phase-next"
            type="button"
            aria-label={copy.detail.nextPhase}
            onClick={showNextPhase}
          >
            <span>Próximo</span>
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </article>
    </section>
  );
}
