const Hero = (about) => {
    return (
      <section id="hero" className="hero section dark-background">
  
        <img src={about?.profile_photo} alt="" data-aos="fade-in" className=""/>
  
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Anshad E K</h2>
          <p>I'm <span className="typed" data-typed-items="Developer, Photographer, Videographer, Video Editor">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
        </div>
  
      </section>
        );
};

export default Hero;
