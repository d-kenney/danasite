import './styles/Up.css';

const Up = () => {
  const goUp = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener('scroll', (e) => {
    const up = document.getElementById('up');
    if (window.scrollY >= 85) {
      up.className = 'upShow';
    } else {
      up.className = 'upHidden';
    }
  });

  return (
    <img
      src="up.png"
      id="up"
      alt="up arrow"
      className="upHidden"
      onClick={goUp}
    />
  );
};

export default Up;
