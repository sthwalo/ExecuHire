export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full h-[90vh] relative flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/mec.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Luxury & Performance Car Hire
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the extraordinary with ExecuHire
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose ExecuHire
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            // ...existing code...
          </div>
        </div>
      </section>
    </main>
  );
}
