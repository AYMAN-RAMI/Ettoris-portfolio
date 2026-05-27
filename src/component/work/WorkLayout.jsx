const WorkLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-bleu">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24 lg:px-24">
        {children}
      </div>
    </main>
  );
};

export default WorkLayout;
