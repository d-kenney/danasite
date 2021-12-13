import './styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div id="homePageContainer" className="flexColumn">
      <div id="box1" className="flexColumn">
        <div id="sloganContainer">
          <h1 id="slogan">Music Marketing & Artist Coaching</h1>
        </div>
        <a
          id="consultation1"
          href="https://calendly.com/danakenney/30-minute-call"
          target="blank"
        >
          Schedule a free consultation
        </a>
      </div>
      <div id="box2" className="flexColumn">
        <div id="quote1Container">
          <h1 id="Intro">Dana Kenney</h1>
          <h3 id="quote1">
            I provide over 5 years of experience in the music industry, with a
            unique talent for seeing both the creative vision and logical
            analysis of marketing campaigns. Whether you're an independent
            artist releasing your first album, or a label looking to optimize
            your established revenue streams, I'm excited to work with you!
          </h3>
        </div>
      </div>
      <div id="mainPhotoContainer">
        <img src="danaPhoto.jpg" alt="Dana Kenney" id="mainPhoto" />
      </div>
      <div id="box3" className="flexColumn">
        <h1 id="services">Services</h1>
        <div id="servicesContainer">
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Artist Coaching</h3>
            <p className="serviceDescription">
              One-on-one coaching to take your music career to the next level.
              Pick my brain and discuss all aspects of your career, big or
              small. A-la-carte, or custom packages available.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Marketing Plans</h3>
            <p className="serviceDescription">
              Whether it’s a single or an album, I'll design a personalized
              step-by-step plan to ensure your music & message connect with as
              many people as possible, and I'll serve as your project manager
              for the release.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Branding</h3>
            <p className="serviceDescription">
              Get professional guidance on crafting your visual brand and
              mission statement as an artist.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Streaming Strategy</h3>
            <p className="serviceDescription">
              Increase your followers and streams on Spotify 100% organically.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Digital Advertising</h3>
            <p className="serviceDescription">
              Grow your fanbase with social media ads on Facebook and Instagram,
              and track campaign performance.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Digital Marketing</h3>
            <p className="serviceDescription">
              Optimize your digital and social media profiles to accelerate fan
              growth and drive streams/sales. I'll implement provide strategy
              supported by comprehensive analytics and current research on all
              the latest technology, trends and best practices.
            </p>
          </div>
        </div>
        <Link to="/about">
          <button id="learnMoreButton">About Dana</button>
        </Link>
      </div>
      <div id="box4" className="flexColumn">
        <div id="playlistContainer">
          <div id="playlistDescriptionContainer" className="flexColumn">
            <h2 id="playlistDescription">
              I curate this playlist, it's full of my latest discoveries and
              obsessions. I hope you enjoy these tunes as much I do. Does your
              music have the right{' '}
              <span style={{ fontStyle: 'italic' }}>~vibe~</span> ? Submit{' '}
              <Link
                to="/playlist"
                style={{
                  color: 'rgb(230, 111, 0)',
                  textDecoration: 'underline',
                }}
              >
                here.
              </Link>
            </h2>
          </div>
          <iframe
            title="playlist"
            src="https://open.spotify.com/embed/playlist/1gVD3zef2306hkHHBl9H2Q"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            id="spotifyEmbed"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
