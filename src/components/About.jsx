const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-50 py-6 md:py-12 flex flex-col items-center text-left bg-[url('/image/qulity-bg.png')] bg-no-repeat bg-contain bg-center"
    >
      <div className="inline-block px-4 text-center border-b-2 border-gradient rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900">About us</h2>
      </div>

      <div className="max-w-4xl px-4 md:px-8 mt-6">
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas,
          eros at fermentum tincidunt, dui erat tempor lorem, ut tristique lorem
          lorem vel felis. Curabitur euismod turpis neque, nec ullamcorper leo
          interdum eu. In ut vestibulum nunc. Etiam feugiat lectus vel nisl
          mollis, et auctor orci fermentum. Proin in turpis ut orci aliquam
          convallis. Fusce viverra libero at magna facilisis, ut pharetra nisi
          lobortis. Cras eget tortor augue. Etiam pretium vulputate erat id
          pretium. Mauris vitae placerat enim. Integer vestibulum nunc metus, at
          volutpat purus feugiat ac. Mauris at lacinia erat. Curabitur euismod
          augue felis, vel tincidunt nisi tincidunt vitae.
        </p>
      </div>
    </section>
  );
};

export default About;
