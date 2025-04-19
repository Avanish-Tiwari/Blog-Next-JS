import Layout from '../../components/layout';
import Head from 'next/head';
import Script from 'next/script';
 
export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
      <h1>First Post</h1>
      <p>This is a test post
       this is a test post
       this is a test post
       this is a test post
       this is a test post
       this is a test post
       this is a test post
       this is a test post  
      </p>
     
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          // console.log('script loaded correctly, window.FB has been populated');
        }}
      />
    
    </Layout>
  );
}