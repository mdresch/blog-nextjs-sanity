import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript">
          (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
              (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
            var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
            var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
          })(window,document,"https://web-sdk-eu.aptrinsic.com/api/aptrinsic.js","AP-PWYCMG7PN4QD-1");
        </script>
      </Head>
      <body className="bg-white text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
