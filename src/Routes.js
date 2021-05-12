import { Route, Switch } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from './HomePage';
import About from './About';
import Blog from './Blog';
import Playlist from './Playlist';
import Footer from './Footer';
import SingleBlog from './SingleBlog';
import BurgerMenu from './BurgerMenu';
import Spacer from './Spacer';
import ErrorPage from './ErrorPage';

const Router = () => {
  return (
    <>
      <NavBar />
      <Spacer />
      <BurgerMenu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/blog/:blogid" component={SingleBlog} />
        <Route path="/blog" component={Blog} />
        <Route path="/playlist" component={Playlist} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default Router;
