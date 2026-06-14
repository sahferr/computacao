import { useState } from "react";

export function AreaList({ areas, selectedId, onSelect, copy }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`sidebar area-library ${isOpen ? "expanded" : ""}`}
      id="areas"
      aria-label="Áreas de estudo"
    >
      <button
        className="library-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{copy.detail.libraryToggle}</span>
        <span aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className="area-list">
        {areas.map((area) => {
          const total = area.phases.reduce(
            (sum, phase) => sum + phase.topics.length,
            0,
          );

          return (
            <button
              className={`area-button area-color-${area.id} ${
                area.id === selectedId ? "active" : ""
              }`}
              key={area.id}
              type="button"
              onClick={() => {
                onSelect(area.id);
                setIsOpen(false);
              }}
            >
              <span className="area-icon" aria-hidden="true">
                {area.icon}
              </span>
              <span>
                <span className="area-title">{area.title}</span>
                <span className="area-count">{copy.detail.areaCount(total)}</span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
