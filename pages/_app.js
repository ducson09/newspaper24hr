import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const renderMetaSEO = () => {
    if (pageProps.post) {
      const meta = pageProps.post;
      //{meta["_embedded"]["author"][0]["url"].split("://")[1]}
      //{meta.link}
      return (
        <>
          <title>{pageProps.post.title.rendered}</title>
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={meta.title.rendered} />
          <meta property="og:description" content="..." />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="article:section" content={meta["_embedded"]["wp:term"][0][0]["name"]} />
          <meta property="og:image" content={meta["_embedded"]["wp:featuredmedia"][0]['media_details'].sizes.full['source_url']} />
          <meta property="og:image:alt" content={meta["_embedded"]["wp:featuredmedia"][0]["alt_text"]} />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="394" />
        </>
      );
    }
  }


  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        {renderMetaSEO()}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
