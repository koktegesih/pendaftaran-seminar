// pages/_app.js (or app/_app.js for App Router)
import '../../public/assets/css/nucleo-icons.css';
import '../../public/assets/css/nucleo-svg.css';
import '../../public/assets/css/font-awesome.css';
import '../../public/assets/css/argon-design-system.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;