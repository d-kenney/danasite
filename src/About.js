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
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo.
            <br />
            <br />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio.{' '}
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
