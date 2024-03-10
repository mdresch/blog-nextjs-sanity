import 'tailwindcss/tailwind.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Blog CBA Consult</title>
      </head>
      <body>

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      <!-- Embed on page - Microsoft Authorized Refurbisher -->
<div id="dccn-e64f665b-7b80-4f33-9b7b-b48a822418f3"></div>
<script type='text/javascript'>
    (function() {
        const scriptId = 'e64f665b-7b80-4f33-9b7b-b48a822418f3';
        const bannerHeight = 90; /* Override banner height */
        const bannerWidth = 728; /* Override banner witdh */
        const embedType = 'inline'; /* Set embed type: inline, banner */

        const script = document.createElement('script');
        script.defer = true;
        script.src = `https://dmc.partner.microsoft.com/dccn/api/embedded-campaigns/js?id=${scriptId}&height=${bannerHeight}&width=${bannerWidth}&embedType=${embedType}`;
        document.body.append(script);
    })();
</script>  
    </html>
  )
}
