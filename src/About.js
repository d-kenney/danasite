import './About.css';

const About = () => {
  window.scrollTo(0, 0);
  return (
    <div id="aboutContainer" className="flexColumn">
      <div id="aboutBox1" className="flexColumn">
        <h1 id="aboutTitle">About</h1>
      </div>
      <div id="aboutBox2" className="flexColumn">
        <div id="aboutDescriptionContainer" className="flexColumn">
          <p id="aboutDescription">
            Dana Kenney is a rising executive in the music industry,
            specializing in marketing, branding, streaming, 3rd party playlists,
            and release strategy. She currently holds the position of Streaming
            & Marketing Manager at{' '}
            <a
              href="https://www.antifragilemusic.com/"
              target="blank"
              className="aboutLink"
            >
              AntiFragile Music
            </a>
            , an independent record label in New York City.
            <br />
            <br />
            Dana has had a diverse career so far, beginning with an internship
            in production at Word Entertainment, which was under Warner Music
            Group at the time. She then went on to carve her own path in the
            live event sector, culminating in being the production manager of
            the Nashville Boogie Vintage Weekender, the second largest
            rockabilly festival in the US, which included producing the finale
            concert at the legendary Grand Ole Opry.
            <br />
            <br />
            When Spotify started sweeping across the world and proving itself a
            major force in the industry, Dana dove head first into streaming and
            became a campaign manager at{' '}
            <a
              href="https://streamingpromotions.com/"
              target="blank"
              className="aboutLink"
            >
              Streaming Promotions
            </a>{' '}
            in Nashville. There, she quickly gained an intimate knowledge of
            this burgeoning area of the industry, which led to her current
            position at AntiFragile Music. Dana enjoys consulting developing
            artists, and has had the privilege of speaking on the topics of
            music streaming and marketing at universities and industry panels,
            including Hofstra University and Music Tectonics.
            <br />
            <br />
            Check out my{' '}
            <a
              id="featureLink"
              href="https://atwoodmagazine.com/whm2106-womens-history-month-2021-feature-part-6/?fbclid=IwAR0O9_IGdPbBQMLmmZ2b2ch6zGNw1QdjESQlIWArUVKJSzY65fH5z30OSS8"
              target="blank"
            >
              interview in Atwood Magazine
            </a>{' '}
            for women's history month.
          </p>
        </div>
      </div>
      <div id="photo2Container" className="flexColumn">
        <img src="/danaPhoto2.jpg" alt="Dana Kenney" id="danaPhoto2" />
      </div>
    </div>
  );
};

export default About;
