import './Playlist.css';

const Playlist = () => {
  window.scrollTo(0, 0);
  return (
    <div id="playlistSubmissionContainer" className="flexColumn">
      <div id="playlistBox1" className="flexColumn">
        <h1 id="playlistPageTitle">Playlist Submission Form</h1>
      </div>
      <img src="playlistBanner.jpg" alt="Playlist Banner" id="playlistBanner" />
      <div id="playlistEmbedWrapper" className="flexColumn">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScmtZY2iaedaKErD9k7r8pdvpX1dVtdLprmKHi472to_9ypmw/viewform?embedded=true"
          title="playlistSubmission"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          id="playlistEmbed"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Playlist;
