import heroProgrammerImage from "../assets/computopia-hero-programmer.webp";

export function Hero({ copy, query, setQuery, stats }) {
  return (
    <header className="hero shell">
      <div className="topbar">
        <a className="brand" href="#roadmap" aria-label={copy.site.title}>
          <span className="brand-mark" aria-hidden="true">
            C
          </span>
          <span className="brand-name">{copy.site.shortTitle}</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {copy.navigation.map((item) => (
            <a
              className={item.tone ? `nav-link nav-link-${item.tone}` : "nav-link"}
              key={`${item.href}-${item.label}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{copy.site.eyebrow}</p>
          <h1>{copy.site.heroTitle}</h1>
          <p className="lead">{copy.site.heroLead}</p>
        </div>

        <aside className="hero-panel" aria-label="Resumo do roadmap">
          <figure className="hero-image-frame">
            <img
              src={heroProgrammerImage}
              alt="Ilustração de uma pessoa programando diante de uma tela com código"
              fetchPriority="high"
              decoding="async"
            />
          </figure>

          <div className="stats">
            <Stat value={stats.areas} label={copy.stats.areas} tone="green" />
            <Stat value={stats.phases} label={copy.stats.phases} tone="blue" />
            <Stat value={stats.topics} label={copy.stats.topics} tone="gold" />
          </div>

          <div className="search-panel">
            <label htmlFor="search">{copy.search.label}</label>
            <input
              className="search"
              id="search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.search.placeholder}
            />
          </div>
        </aside>
      </div>
    </header>
  );
}

function Stat({ value, label, tone }) {
  return (
    <div className={`stat stat-${tone}`}>
      <b>{value}</b>
      <span>{label}</span>
    </div>
  );
}
