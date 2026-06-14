export function TechPanel() {
  return (
    <div className="tech-panel" aria-label="Painel visual de tecnologia e conteúdo">
      <div className="tech-orbit tech-orbit-a" />
      <div className="tech-orbit tech-orbit-b" />
      <div className="tech-node tech-node-a" />
      <div className="tech-node tech-node-b" />
      <div className="tech-node tech-node-c" />

      <div className="tech-window">
        <div className="tech-window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="tech-grid">
          <span className="tech-cell tech-cell-wide" />
          <span />
          <span />
          <span className="tech-cell tech-cell-tall" />
          <span />
          <span className="tech-cell tech-cell-wide" />
        </div>
      </div>

      <div className="tech-stack">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
