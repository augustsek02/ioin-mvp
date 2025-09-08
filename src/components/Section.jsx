export default function Section({ id, className = "", bg = "", overlay = "", children }) {
  const scrollToSelf = (e) => {
    e?.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.focus({ preventScroll: true });
    }
  };
  
  const sectionClass = `section${id === 'hero' ? ' hero' : ''}${className ? ' ' + className : ''}`;

  return (
    <section
      id={id}
      tabIndex={-1}
      className={sectionClass}
      
    >
      {bg ? <div aria-hidden className={`absolute inset-0 -z-10 pointer-events-none ${bg}`}/> : null}
      {overlay ? <div aria-hidden className={`aurora-layer -z-10 ${overlay}`} /> : null}

      {id ? (
        <a
          href={`#${id}`}
          onClick={scrollToSelf}
          className="absolute top-3 right-3 z-30 rounded-md p-1 text-slate-400 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label={`Link to section ${id}`}
        >
          <span aria-hidden className="text-sm">#</span>
        </a>
      ) : null}

  <div className="w-full max-w-[var(--container)] mx-auto section-container" style={{containerType:'inline-size'}}>{children}</div>
      <div className="edge-fade" aria-hidden></div>
    </section>
  );
}
