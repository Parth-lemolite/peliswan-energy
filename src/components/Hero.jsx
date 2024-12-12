function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[url('/image/karsten-wurth-ZKWgoRUYuMk-unsplash.jpg')] bg-cover bg-no-repeat"
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/20" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h1 className="text-white text-5xl lg:max-w-3xl mb-4">
            Peliswan energy is the Future
          </h1>
          <p className="text-white text-lg mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
            Join us for the most anticipated year!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
