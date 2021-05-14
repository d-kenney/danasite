import './Footer.css';

const Footer = () => {
  return (
    <>
      <div id="box5" className="flexColumn">
        <h1 id="talk">Let's Talk!</h1>
        <h3 id="consultation2">Your first consultation is free.</h3>
        <a href="https://calendly.com/danakenney/30-minute-call" target="blank">
          <button id="consultationButton">Schedule a Consultation</button>
        </a>
      </div>
      <div id="box6" className="flexColumn">
        <div id="footerContainer">
          <div id="footer">
            <a href="https://www.instagram.com/thedanaleigh/" target="blank">
              <img src="instagram.png" alt="instagram" className="footerIcon" />
            </a>
            <a href="https://www.twitter.com/thedanaleigh/" target="blank">
              <img src="twitter.png" alt="twitter" className="footerIcon" />
            </a>
            <a href="https://www.facebook.com/dangerdana/" target="blank">
              <img src="facebook.png" alt="facebook" className="footerIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/dana-kenney-9a07365a/"
              target="blank"
            >
              <img src="linkedin.png" alt="linkedin" className="footerIcon" />
            </a>
            <a href="mailto:danaleigh23@gmail.com">
              <img src="email.png" alt="email" className="footerIcon" />
            </a>
          </div>
        </div>
      </div>
      <div id="creditContainer">
        <p id="credit">
          Website coded by{' '}
          <a
            href="https://dereklouis.github.io"
            target="blank"
            style={{
              color: '#538d72',
            }}
          >
            Derek Louis
          </a>
          , 2021
        </p>
      </div>
    </>
  );
};

export default Footer;
