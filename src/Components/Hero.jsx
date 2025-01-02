import HeroImg from '../../src/assets/banner.jpg'

function Hero() {
  return (
    <section className="relative my-6 text-black">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-black">
            <h1 className="text-4xl  font-bold leading-tight mb-4">
              Unveil the Magic of Stories
            </h1>
            <p className="text-lg mb-6">
              Explore the latest book showcases, author events, and literary journeys.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="#" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg text-lg">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={HeroImg} // Replace with your image URL
              alt="Book Showcase"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <h2 className='text-4xl font-bold text-center py-5'>Explore Captivating Stories</h2>
    </section>
  );
}

export default Hero;
