import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data: any = {
    'title': 'EbookdDen - Free Medical, Engineering, Mechanical, Coputer Science eBooks Download',
    'description': 'All eBooks available for download for free.Medical,Engineering,comics, Programming, Web Development, Computer Science books download in PDF,EPUB...',
    'type': 'website',
    'locale': 'en_US',
    'url': environment.site_url,
    'site_name': environment.site_name
  }
  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.updatePageMeta(this.data);
  }

  //   <!-- This site is optimized with the Yoast SEO plugin v9.2.1 - https://yoast.com/wordpress/plugins/seo/ -->
  // <meta name="description" content="All IT related PDF eBooks available for download for free. Programming, Web Development, Computer Science books download in PDF."/>
  // <link rel="canonical" href="http://www.allitebooks.in/" />
  // <link rel="next" href="http://www.allitebooks.in/page/2/" />
  // <meta property="og:locale" content="en_US" />
  // <meta property="og:type" content="website" />
  // <meta property="og:title" content="All IT eBooks - Free IT eBooks Download" />
  // <meta property="og:description" content="All IT related PDF eBooks available for download for free. Programming, Web Development, Computer Science books download in PDF." />
  // <meta property="og:url" content="http://www.allitebooks.in/" />
  // <meta property="og:site_name" content="All IT eBooks" />
  // <meta name="twitter:card" content="summary_large_image" />
  // <meta name="twitter:description" content="All IT related PDF eBooks available for download for free. Programming, Web Development, Computer Science books download in PDF." />
  // <meta name="twitter:title" content="All IT eBooks - Free IT eBooks Download" />
  // <script type='application/ld+json'>{"@context":"https:\/\/schema.org","@type":"WebSite","@id":"#website","url":"http:\/\/www.allitebooks.in\/","name":"All IT eBooks","potentialAction":{"@type":"SearchAction","target":"http:\/\/www.allitebooks.in\/?s={search_term_string}","query-input":"required name=search_term_string"}}</script>
  // <meta name="msvalidate.01" content="AB6BB8DF2B1EA55EEF5CB555DFF1BED7" />
  // <meta name="google-site-verification" content="w21ZfYsW5N3gkK4rUeD5FRmeluZrSsTI9aNLpU6WMSM" />
  // <meta name="yandex-verification" content="bbecc10c7b5065b5" />
  // <!-- / Yoast SEO plugin. -->
}
