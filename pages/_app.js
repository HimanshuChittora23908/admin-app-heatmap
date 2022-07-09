import '../styles/globals.css'
import "../styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
