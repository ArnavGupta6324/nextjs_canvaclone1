// pages/_app.js
import App from '../components/App';  // Import your custom App component
import styles from '../styles/globals.css';  // Correct path if the file is inside the styles folder



// This is the custom App component wrapper for your page
function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />  {/* Renders the page component */}
    </App>
  );
}

export default MyApp;
