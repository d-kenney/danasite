import './styles/ErrorPage.css';

const ErrorPage = () => {
  window.scrollTo(0, 0);
  return (
    <div id="errorPageContainer" className="flexColumn">
      <h1 id="errorLine1">404</h1>
      <h1 id="errorLine2">Page Not Found</h1>
    </div>
  );
};

export default ErrorPage;
