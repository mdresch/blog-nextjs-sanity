import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Existing Aptrinsic script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
                (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
              var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
              var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
              })(window,document,"https://web-sdk-eu.aptrinsic.com/api/aptrinsic.js","AP-PWYCMG7PN4QD-1");
            `,
          }}
        />

        {/* Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R1GWDYQTDT"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-R1GWDYQTDT'); 
            `,
          }}
        />
                {/* Clarity.ms script */}
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "leibon0hju");
        `}} />
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
