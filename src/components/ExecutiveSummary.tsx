const ExecutiveSummary = () => {
  return (
    <section id="summary" className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title text-brand-dark-blue">Executive Summary</h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          The inaugural Meetups Frutales Q1 event in Mexico City successfully launched a year-long
          educational initiative, establishing a strong foundation for quarterly Ethereum education
          across Mexico. The event executed all planned curriculum tracks, achieved meaningful
          engagement both in-person and remotely, and created authentic community connections
          that led to commitments for continued participation and hackathon team formation.
        </p>

        <img
          src="https://res.cloudinary.com/dpzywidxy/image/upload/v1772053964/Foto-final-MeetupsFrutales_v5sx1u.jpg"
          alt="Foto final del evento Meetups Frutales Q1 2026"
          className="w-full rounded-2xl shadow-xl animate-fade-in"
        />
      </div>
    </section>
  );
};

export default ExecutiveSummary;
