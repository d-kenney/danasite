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
            & Marketing Manager at AntiFragile Music, an independent record
            label in New York City.
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
            became a campaign manager at Streaming Promotions in Nashville.
            There, she quickly gained an intimate knowledge of this burgeoning
            area of the industry, which led to her current position at
            AntiFragile Music. Dana enjoys consulting developing artists, and
            has had the privilege of speaking on the topics of music streaming
            and marketing at universities and industry panels, including Hofstra
            University and Music Tectonics.
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
