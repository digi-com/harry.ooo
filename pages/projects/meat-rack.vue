<template>
  <div id="meat-rack">
    <!-- Preloader -->
    <PageLoader line-hex="#fff" bg-hex="#000" />
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas
      :images="canvasImages"
      :image-width="360"
      :image-height="288"
      logo="/meat-rack/meat-rack-title.png"
    />
    <!-- Video -->
    <ProjectFilm :film-link="filmLink" />
    <!-- Feature -->
    <ProjectFeature :content="projectFeatureContent" />
    <!-- Credits -->
    <Credits :credits="credits" />
    <!-- Image Grid -->
    <ProjectImages :images="projectImages" />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvasImages: [
        '/meat-rack/1.png',
        '/meat-rack/2.png',
        '/meat-rack/3.png',
        '/meat-rack/4.png',
        '/meat-rack/5.png',
        '/meat-rack/6.png',
        '/meat-rack/7.png',
        '/meat-rack/8.png',
        '/meat-rack/9.png',
        '/meat-rack/10.png',
        '/meat-rack/11.png',
        '/meat-rack/12.png',
        '/meat-rack/13.png',
        '/meat-rack/14.png',
        '/meat-rack/15.png',
        '/meat-rack/16.png',
        '/meat-rack/17.png',
        '/meat-rack/18.png',
        '/meat-rack/19.png',
        '/meat-rack/20.png',
        '/meat-rack/21.png',
        '/meat-rack/22.png',
        '/meat-rack/23.png',
        '/meat-rack/24.png',
        '/meat-rack/25.png',
        '/meat-rack/26.png',
        '/meat-rack/27.png',
        '/meat-rack/28.png',
        '/meat-rack/29.png',
        '/meat-rack/30.png',
        '/meat-rack/31.png',
        '/meat-rack/32.png',
        '/meat-rack/33.png',
        '/meat-rack/34.png',
        '/meat-rack/35.png',
        '/meat-rack/36.png',
        '/meat-rack/37.png',
        '/meat-rack/38.png',
        '/meat-rack/39.png',
        '/meat-rack/40.png',
        '/meat-rack/41.png',
        '/meat-rack/42.png',
        '/meat-rack/43.png',
        '/meat-rack/44.png',
        '/meat-rack/45.png',
        '/meat-rack/46.png',
        '/meat-rack/47.png',
        '/meat-rack/48.png'
      ],
      filmLink: '/meat-rack/supercut_o.mp4',
      projectFeatureContent: {
        title: 'Meat Rack (2020)',
        paragraph: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.
        <br /><br />
        <i>Meat Rack</i> works as a document of the celebrations, taking us all the way from Somerset to New York over the course of 16 minutes. From construction site to dance floor, build crew to muscle boys, the film is a personal tribute to a cultural phenomenon. Intimate, expressive and occasionally unsettling, <i>Meat Rack</i> captures the fleeting nature of Glastonbury’s most notorious nightspot. Shot on a Betacam SP camcorder with additional VHS-C inserts. Both formats were manufactured and available to the public in 1982.
        <br /><br />
        Exhibited online via Block9 (23rd June → 12th July 2020).`,
        footnotes: [
          { title: 'The NYC Downlow', link: 'https://thenycdownlow.com/' },
          { title: 'Block9', link: 'https://www.block9.com/' },
          {
            title: 'Glastonbury Festival',
            link: 'https://www.glastonburyfestivals.co.uk/'
          }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'In collaboration with',
          name: 'Gideon Berger, Stephen Gallagher'
        },
        { credit: 'Cinematography', name: 'Saul Pankhurst' },
        { credit: 'Camera', name: 'Saul Pankhurst, Liam Healy' },
        { credit: 'Sound Recording', name: 'Emma Barnaby' },
        { credit: 'Sound Design', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Special thanks', name: 'Andrew Kötting' },
        { credit: 'Titles', name: 'Dennis McInnes' },
        { credit: 'Commissioned by', name: 'Block9' }
      ],
      projectImages: [
        {
          url: '/meat-rack/1.png',
          placeholder: '/meat-rack/placeholders/1.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/2.png',
          placeholder: '/meat-rack/placeholders/2.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/3.png',
          placeholder: '/meat-rack/placeholders/3.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/4.png',
          placeholder: '/meat-rack/placeholders/4.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/5.png',
          placeholder: '/meat-rack/placeholders/5.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/6.png',
          placeholder: '/meat-rack/placeholders/6.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/7.png',
          placeholder: '/meat-rack/placeholders/7.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/8.png',
          placeholder: '/meat-rack/placeholders/8.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/9.png',
          placeholder: '/meat-rack/placeholders/9.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/10.png',
          placeholder: '/meat-rack/placeholders/10.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/11.png',
          placeholder: '/meat-rack/placeholders/11.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/12.png',
          placeholder: '/meat-rack/placeholders/12.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/13.png',
          placeholder: '/meat-rack/placeholders/13.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/14.png',
          placeholder: '/meat-rack/placeholders/14.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/15.png',
          placeholder: '/meat-rack/placeholders/15.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/16.png',
          placeholder: '/meat-rack/placeholders/16.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/17.png',
          placeholder: '/meat-rack/placeholders/17.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/18.png',
          placeholder: '/meat-rack/placeholders/18.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/19.png',
          placeholder: '/meat-rack/placeholders/19.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/20.png',
          placeholder: '/meat-rack/placeholders/20.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/21.png',
          placeholder: '/meat-rack/placeholders/21.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/22.png',
          placeholder: '/meat-rack/placeholders/22.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/23.png',
          placeholder: '/meat-rack/placeholders/23.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/24.png',
          placeholder: '/meat-rack/placeholders/24.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/25.png',
          placeholder: '/meat-rack/placeholders/25.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/26.png',
          placeholder: '/meat-rack/placeholders/26.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/27.png',
          placeholder: '/meat-rack/placeholders/27.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/28.png',
          placeholder: '/meat-rack/placeholders/28.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/29.png',
          placeholder: '/meat-rack/placeholders/29.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/30.png',
          placeholder: '/meat-rack/placeholders/30.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/31.png',
          placeholder: '/meat-rack/placeholders/31.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/32.png',
          placeholder: '/meat-rack/placeholders/32.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/33.png',
          placeholder: '/meat-rack/placeholders/33.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/34.png',
          placeholder: '/meat-rack/placeholders/34.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/35.png',
          placeholder: '/meat-rack/placeholders/35.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/36.png',
          placeholder: '/meat-rack/placeholders/36.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/37.png',
          placeholder: '/meat-rack/placeholders/37.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/38.png',
          placeholder: '/meat-rack/placeholders/38.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/39.png',
          placeholder: '/meat-rack/placeholders/39.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/40.png',
          placeholder: '/meat-rack/placeholders/40.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/41.png',
          placeholder: '/meat-rack/placeholders/41.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/42.png',
          placeholder: '/meat-rack/placeholders/42.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/43.png',
          placeholder: '/meat-rack/placeholders/43.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/44.png',
          placeholder: '/meat-rack/placeholders/44.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/45.png',
          placeholder: '/meat-rack/placeholders/45.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/46.png',
          placeholder: '/meat-rack/placeholders/46.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/47.png',
          placeholder: '/meat-rack/placeholders/47.png',
          width: 720,
          height: 576
        },
        {
          url: '/meat-rack/48.png',
          placeholder: '/meat-rack/placeholders/48.png',
          width: 720,
          height: 576
        }
      ]
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: ['night']
      },
      bodyAttrs: {
        class: ['night']
      },
      title: 'Harry Lawson | Meat Rack (2020)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `The NYC Downlow first appeared at Glastonbury Festival in 2007 as a film-set replica of a dilapidated 1970s Lower East Side tenement with an X-rated gay nightclub inside. Having since evolved into a warehouse at the heart of the Meatpacking District in New York City circa 1982, The Downlow celebrated its 10th anniversary in 2017.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/meat-rack'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/meat-rack'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Meat Rack (2020)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Meat Rack (2020)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/og.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/og.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Meat Rack (2020)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Meat Rack (2020)'
        }
      ]
    }
  }
}
</script>

<style>
#meat-rack .nav-button,
#meat-rack nav a,
#meat-rack .feature .footnote-number,
#meat-rack .credits .item:first-child,
#meat-rack .play-button {
  background: black;
  border-color: white;
  color: white;
}

#meat-rack .nav-button:hover,
#meat-rack nav a:hover,
#meat-rack .feature .footnote-number:hover,
#meat-rack .play-button:hover {
  background: white;
  border-color: white;
  color: black;
}

#meat-rack .credits .item,
#meat-rack .credits .item:first-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

#meat-rack,
#meat-rack canvas {
  background: black;
  color: white;
}

#meat-rack .feature .footnotes p a {
  color: white;
}

/* Responsive */

@media screen and (min-width: 0px) and (max-width: 1024px) {
  #meat-rack .nav-button:hover,
  #meat-rack nav a:hover,
  #meat-rack .feature .footnote-number:hover,
  #meat-rack .play-button:hover {
    background: black;
    border-color: white;
    color: white;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1279px) {
}
@media screen and (min-width: 1280px) and (max-width: 1440px) {
}
@media screen and (min-width: 1441px) and (max-width: 1600px) {
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
}
@media screen and (min-width: 2561px) and (max-width: 9999px) {
}
</style>
