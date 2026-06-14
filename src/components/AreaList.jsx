export function AreaList({ areas, selectedId, onSelect, copy }) {
  return (
    <aside className="sidebar" id="areas" aria-label="Áreas de estudo">
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
            onClick={() => onSelect(area.id)}
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
    </aside>
  );
}
