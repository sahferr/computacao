export function DeskSetup3D() {
  return (
    <div className="desk-scene" aria-label="Setup 3D com computador, teclado e café">
      <div className="desk-stage">
        <div className="desk-surface" />

        <div className="monitor-setup">
          <div className="monitor-display">
            <div className="monitor-sidebar">
              <span />
              <span />
              <span />
            </div>
            <div className="monitor-content">
              <span className="content-card content-card-main" />
              <span className="content-card content-card-blue" />
              <span className="content-card content-card-pink" />
              <span className="content-card content-card-gold" />
              <span className="content-line content-line-a" />
              <span className="content-line content-line-b" />
              <span className="content-node content-node-a" />
              <span className="content-node content-node-b" />
            </div>
          </div>
          <div className="monitor-stand" />
          <div className="monitor-foot" />
        </div>

        <div className="desk-keyboard" aria-hidden="true">
          {Array.from({ length: 28 }, (_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="coffee" aria-hidden="true">
          <span className="steam steam-a" />
          <span className="steam steam-b" />
          <span className="steam steam-c" />
          <div className="cup">
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}
