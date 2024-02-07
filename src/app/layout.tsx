import type { Metadata } from 'next'
import { Nunito_Sans} from 'next/font/google'
import './globals.css'
import React from "react";
import Script from "next/script";


const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--var-nunito' })

export const metadata: Metadata = {
  title: 'Hotel',
  description: 'Отличный отель в городе Иваново',
  keywords: ['Ивановоотель', 'Артотель', 'Ivanovootel', 'Arthotel'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mx-auto'>
        <Script>{
            `(function(w) {
        var q = [
            ['setContext', 'TL-INT-ivhg-ru_2024-01-26', 'ru'],
            ['embed', 'search-form', {
                container: 'tl-search-form'
            }],
           ['setContext', 'TL-INT-ivhg-ru_2024-01-26.9193', 'ru'],
           ['embed', 'search-form',{
               container: 'tl-search-form-9193'
           }],
           ['setContext', 'TL-INT-ivhg-ru_2024-01-26.14699', 'ru'],
           ['embed', 'search-form',{
               container: 'tl-search-form-14699'
           }],
        ];
        var h=["ru-ibe.tlintegration.ru","ibe.tlintegration.ru","ibe.tlintegration.com"];
        var t = w.travelline = (w.travelline || {}),
        ti = t.integration = (t.integration || {});
        ti.__cq = ti.__cq? ti.__cq.concat(q) : q;
       if (!ti.__loader) {
          ti.__loader = true;
          var d=w.document,c=d.getElementsByTagName("head")[0]||d.getElementsByTagName("body")[0];
          function e(s,f) {return function() {w.TL||(c.removeChild(s),f())}}
          (function l(h) {
              if (0===h.length) return; var s=d.createElement("script");
              s.type="text/javascript";s.async=!0;s.src="https://"+h[0]+"/integration/loader.js";
              s.onerror=s.onload=e(s,function(){l(h.slice(1,h.length))});c.appendChild(s)
          })(h);
      }
    })(window);`
        }</Script>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
