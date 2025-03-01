import Navigation from "../navigation";

export const CenteredLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #04082f, #01020b)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-black/50 backdrop-blur-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Navigation />
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-between items-center">
        {children}
      </div>
    </main>
  );
};

export default CenteredLayout;
