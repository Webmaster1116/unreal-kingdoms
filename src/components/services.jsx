export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Check out our latest trailer</h2>
        </div>
        <div className="row">
          <div className="youtube">
            <iframe
              src="https://www.youtube.com/embed/0n9IsC8jwjI"
              title="UnrealKingdom Cinematic Forest Castle"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zMyuHLkgMmg?playlist=zMyuHLkgMmg&amp;loop=1&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;start=0&amp;autoplay=1"
              dataAutoplay="1"
              frameBorder="0"
              allowFullScreen=""
            ></iframe> */}
          </div>
          <div className="register-bottom">
            <a
              className="register"
              href="https://unrealkingdoms.com/PlayerLogin/register.php"
              target="_blank"
              rel="noreferrer"
            >
              Register now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
