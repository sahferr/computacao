export function Footer({ copy }) {
  return (
    <footer className="shell footer">
      <div className="footer-intro">
        <p className="footer-kicker">{copy.footer.heading}</p>
        <p>{copy.footer.intro}</p>
      </div>

      <div
        className="footer-quotes"
        aria-label="Nomes importantes da computação"
      >
        {copy.footer.notes.map((note) => (
          <article className="footer-quote" key={note.name}>
            <span>{note.area}</span>
            <h3>{note.name}</h3>
            <p>{note.phrase}</p>
          </article>
        ))}
      </div>

      <div className="footer-bottom">
        <span>{copy.site.footer}</span>
        <span> by Sara Ferreira</span>
      </div>
    </footer>
  );
}
