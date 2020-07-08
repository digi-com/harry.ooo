<template>
  <div id="ochre">
    <!-- Preloader -->
    <PageLoader />
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas
      :images="canvasImages"
      :image-width="360"
      :image-height="203"
      logo="/ochre/ochre-title.png"
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
        '/ochre/1.png',
        '/ochre/2.png',
        '/ochre/3.png',
        '/ochre/4.png',
        '/ochre/5.png',
        '/ochre/6.png',
        '/ochre/7.png',
        '/ochre/8.png',
        '/ochre/9.png',
        '/ochre/10.png',
        '/ochre/11.png',
        '/ochre/12.png',
        '/ochre/13.png',
        '/ochre/14.png',
        '/ochre/15.png',
        '/ochre/16.png',
        '/ochre/17.png',
        '/ochre/18.png',
        '/ochre/19.png',
        '/ochre/20.png',
        '/ochre/21.png',
        '/ochre/22.png',
        '/ochre/23.png',
        '/ochre/24.png',
        '/ochre/25.png',
        '/ochre/26.png',
        '/ochre/27.png',
        '/ochre/28.png',
        '/ochre/29.png',
        '/ochre/30.png',
        '/ochre/31.png',
        '/ochre/32.png',
        '/ochre/33.png',
        '/ochre/34.png',
        '/ochre/35.png',
        '/ochre/36.png',
        '/ochre/37.png',
        '/ochre/38.png',
        '/ochre/39.png',
        '/ochre/40.png',
        '/ochre/41.png',
        '/ochre/42.png',
        '/ochre/43.png',
        '/ochre/44.png',
        '/ochre/45.png',
        '/ochre/46.png',
        '/ochre/47.png',
        '/ochre/48.png'
      ],
      filmLink: '/ochre/supercut.mp4',
      projectFeatureContent: {
        title: 'Ochre (2019)',
        paragraph: `<i>Ochre</i> is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, <i>Ochre</i> focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.
        <br /><br />
        The film was photographed on a collection of small format cameras; a Krasnagorsk 3, a Braun Nizo Professional and a Eumig Nautica for underwater sequences. The music for <i>Ochre</i> was provided by Tapan, a Serbian band booked to perform at the festival. The sound was designed and edited by Goran Simonoski, a member of the band.
        <br /><br />
        Filmed at Atlas Electronic in 2018.`,
        footnotes: [
          { title: 'Atlas Electronic', link: 'https://atlas-electronic.com/' },
          { title: 'Saul Pankhurst', link: 'https://vimeo.com/saulpankhurst' },
          { title: 'Tapan', link: 'https://tapan.bandcamp.com/' }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        { credit: 'Cinematography', name: 'Saul Pankhurst' },
        { credit: 'Music by', name: 'Tapan' },
        { credit: 'Sound Design', name: 'Goran Simonoski' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Titles', name: 'Dennis McInnes' },
        { credit: 'Commissioned by', name: 'Atlas Electronic' }
      ],
      projectImages: [
        {
          url: '/ochre/1.png',
          placeholder: '/ochre/placeholders/1.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/2.png',
          placeholder: '/ochre/placeholders/2.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/3.png',
          placeholder: '/ochre/placeholders/3.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/4.png',
          placeholder: '/ochre/placeholders/4.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/5.png',
          placeholder: '/ochre/placeholders/5.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/6.png',
          placeholder: '/ochre/placeholders/6.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/7.png',
          placeholder: '/ochre/placeholders/7.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/8.png',
          placeholder: '/ochre/placeholders/8.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/9.png',
          placeholder: '/ochre/placeholders/9.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/10.png',
          placeholder: '/ochre/placeholders/10.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/11.png',
          placeholder: '/ochre/placeholders/11.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/12.png',
          placeholder: '/ochre/placeholders/12.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/13.png',
          placeholder: '/ochre/placeholders/13.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/14.png',
          placeholder: '/ochre/placeholders/14.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/15.png',
          placeholder: '/ochre/placeholders/15.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/16.png',
          placeholder: '/ochre/placeholders/16.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/17.png',
          placeholder: '/ochre/placeholders/17.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/18.png',
          placeholder: '/ochre/placeholders/18.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/19.png',
          placeholder: '/ochre/placeholders/19.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/20.png',
          placeholder: '/ochre/placeholders/20.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/21.png',
          placeholder: '/ochre/placeholders/21.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/22.png',
          placeholder: '/ochre/placeholders/22.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/23.png',
          placeholder: '/ochre/placeholders/23.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/24.png',
          placeholder: '/ochre/placeholders/24.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/25.png',
          placeholder: '/ochre/placeholders/25.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/26.png',
          placeholder: '/ochre/placeholders/26.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/27.png',
          placeholder: '/ochre/placeholders/27.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/28.png',
          placeholder: '/ochre/placeholders/28.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/29.png',
          placeholder: '/ochre/placeholders/29.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/30.png',
          placeholder: '/ochre/placeholders/30.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/31.png',
          placeholder: '/ochre/placeholders/31.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/32.png',
          placeholder: '/ochre/placeholders/32.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/33.png',
          placeholder: '/ochre/placeholders/33.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/34.png',
          placeholder: '/ochre/placeholders/34.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/35.png',
          placeholder: '/ochre/placeholders/35.png',
          width: 1000,
          height: 563
        },
        {
          url: '/ochre/36.png',
          placeholder: '/ochre/placeholders/36.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/37.png',
          placeholder: '/ochre/placeholders/37.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/38.png',
          placeholder: '/ochre/placeholders/38.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/39.png',
          placeholder: '/ochre/placeholders/39.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/40.png',
          placeholder: '/ochre/placeholders/40.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/41.png',
          placeholder: '/ochre/placeholders/41.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/42.png',
          placeholder: '/ochre/placeholders/42.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/43.png',
          placeholder: '/ochre/placeholders/43.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/44.png',
          placeholder: '/ochre/placeholders/44.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/45.png',
          placeholder: '/ochre/placeholders/45.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/46.png',
          placeholder: '/ochre/placeholders/46.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/47.png',
          placeholder: '/ochre/placeholders/47.png',
          width: 960,
          height: 540
        },
        {
          url: '/ochre/48.png',
          placeholder: '/ochre/placeholders/48.png',
          width: 960,
          height: 540
        }
      ]
    }
  },
  head() {
    return {
      title: 'Harry Lawson | Ochre (2019)',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: `Ochre is the result of a twelve-day journey through Morocco, ending at Atlas Electronic on the outskirts of Marrakech. A collaboration with cinematographer Saul Pankhurst, the film focuses on texture and atmosphere, gradually revealing elements of live performance before making the transition to the night programme.`
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://harry.ooo/projects/ochre'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://harry.ooo/projects/ochre'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Harry Lawson | Ochre (2019)'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Harry Lawson | Ochre (2019)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://harry.ooo/ochre/1.png'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://harry.ooo/ochre/1.png'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: 'Ochre (2019)'
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'Ochre (2019)'
        }
      ]
    }
  }
}
</script>

<style></style>
