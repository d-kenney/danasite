import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  window.scrollTo(0, 0);
  return (
    <div id="homePageContainer" className="flexColumn">
      <div id="box1" className="flexColumn">
        <div id="sloganContainer">
          <h1 id="slogan">
            Music Marketing, Streaming Strategy, & Artist Coaching
          </h1>
        </div>
        <a id="consultation1" href="#slogan">
          Schedule a free consultation
        </a>
      </div>
      <div id="box2" className="flexColumn">
        <div id="quote1Container">
          <h3 id="quote1">
            I help artists achieve real audience growth in the streaming and
            digital landscapes. Specializing in marketing, branding, streaming,
            and release strategy, I will work with you to create a personalized
            plan for your release.
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
              Get personalized one-on-one coaching to take your music career to
              the next level. Discuss all aspects of your career, big and small.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Marketing Plans</h3>
            <p className="serviceDescription">
              Whether it’s a single or an album, get the step-by-step plan to
              help your music to connect with as many people as possible.
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
              Capture new audiences with social media ads on Facebook and
              Instagram.
            </p>
          </div>
          <div className="serviceBlock flexColumn">
            <h3 className="serviceBlockTitle">Bio & Press Releases</h3>
            <p className="serviceDescription">
              Need a bio and/or press release? I got you. *Please note: I am not
              a publicist and don't have any contacts to send your press release
              to.
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
