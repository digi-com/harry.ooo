<template>
  <div id="margaret">
    <!-- Preloader -->
    <PageLoader />
    <!-- Navigation -->
    <Navigation />
    <!-- Canvas -->
    <ProjectCanvas
      :images="canvasImages"
      :image-width="360"
      :image-height="203"
      logo="/margaret/margaret-title.png"
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
        '/margaret/8.png',
        '/margaret/9.png',
        '/margaret/10.png',
        '/margaret/11.png',
        '/margaret/13.png',
        '/margaret/14.png',
        '/margaret/15.png',
        '/margaret/16.png',
        '/margaret/17.png',
        '/margaret/18.png',
        '/margaret/19.png',
        '/margaret/20.png',
        '/margaret/21.png',
        '/margaret/22.png',
        '/margaret/23.png',
        '/margaret/24.png',
        '/margaret/25.png',
        '/margaret/26.png',
        '/margaret/27.png',
        '/margaret/28.png',
        '/margaret/29.png',
        '/margaret/30.png',
        '/margaret/31.png',
        '/margaret/32.png',
        '/margaret/33.png',
        '/margaret/34.png',
        '/margaret/35.png',
        '/margaret/36.png',
        '/margaret/37.png',
        '/margaret/38.png',
        '/margaret/39.png',
        '/margaret/40.png',
        '/margaret/41.png',
        '/margaret/42.png',
        '/margaret/43.png',
        '/margaret/44.png',
        '/margaret/45.png',
        '/margaret/46.png',
        '/margaret/47.png',
        '/margaret/48.png'
      ],
      filmLink: '/margaret/supercut.mp4',
      projectFeatureContent: {
        title: 'Margaret (2020)',
        paragraph: `<i>Margaret</i> is a long-term multimedia project that explores memory, memory loss, intimacy and care through the experiences of families and health workers living with dementia on a daily basis. The project now exists as a body of work about Margaret and the place she spent the last four years of her life — Glenholme House in Sunderland. It is set loosely over a period during which she moved out of her home and into residential care, and features a growing archive of objects and images relating to this time.
        <br /><br />
        <img src="/margaret/margaret-hand.png"/>
        <span class="caption">In 2009, Harry worked with his grandmother, Margaret, on a piece about memory loss. At the time, she was 89 and living with vascular dementia. As part of the project, Margaret was asked to draw around the fingers of her left hand with a pen. The drawing has been reproduced above.</span>
        <br /><br />
        The archive includes memory tests conducted by Harry’s aunt and photographs taken when the family were trying to sell Margaret’s house after moving her into the care home. There are also pages taken from an inventory of Margaret’s clothes and belongings. The film fuses archival home videos and footage recorded at Glenholme House over a number of years before and after her death in 2014. Integrating mundane and surreal aspects of everyday life at the home, it is an observational portrait of Glenholme House and the people who live there. <i>Margaret</i> was screened for the first time at Testing Situations in February 2020.`,
        footnotes: [
          {
            title: 'Glenholme House',
            link: 'https://www.wellburncare.co.uk/'
          },
          {
            title: 'Testing Situations',
            link: 'https://www.charlesrobertharrison.com/testing-situations'
          },
          { title: 'Wellcome Trust', link: 'https://wellcome.ac.uk/' }
        ]
      },
      credits: [
        { credit: 'Directed by', name: 'Harry Lawson' },
        {
          credit: 'Filmed by',
          name: 'Harry Lawson, Geoff Lawson, Elizabeth Lawson'
        },
        { credit: 'Sound Design', name: 'Harry Lawson' },
        { credit: 'Edited by', name: 'Harry Lawson' },
        { credit: 'Commissioned by', name: 'Wellcome Trust' }
      ],
      projectImages: [
        {
          url: '/margaret/1.png',
          placeholder: '/margaret/placeholders/1.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/2.png',
          placeholder: '/margaret/placeholders/2.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/3.png',
          placeholder: '/margaret/placeholders/3.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/4.png',
          placeholder: '/margaret/placeholders/4.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/5.png',
          placeholder: '/margaret/placeholders/5.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/6.png',
          placeholder: '/margaret/placeholders/6.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/7.png',
          placeholder: '/margaret/placeholders/7.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/8.png',
          placeholder: '/margaret/placeholders/8.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/9.png',
          placeholder: '/margaret/placeholders/9.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/10.png',
          placeholder: '/margaret/placeholders/10.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/11.png',
          placeholder: '/margaret/placeholders/11.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/12.png',
          placeholder: '/margaret/placeholders/12.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/13.png',
          placeholder: '/margaret/placeholders/13.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/14.png',
          placeholder: '/margaret/placeholders/14.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/15.png',
          placeholder: '/margaret/placeholders/15.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/16.png',
          placeholder: '/margaret/placeholders/16.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/17.png',
          placeholder: '/margaret/placeholders/17.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/18.png',
          placeholder: '/margaret/placeholders/18.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/19.png',
          placeholder: '/margaret/placeholders/19.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/20.png',
          placeholder: '/margaret/placeholders/20.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/21.png',
          placeholder: '/margaret/placeholders/21.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/22.png',
          placeholder: '/margaret/placeholders/22.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/23.png',
          placeholder: '/margaret/placeholders/23.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/24.png',
          placeholder: '/margaret/placeholders/24.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/25.png',
          placeholder: '/margaret/placeholders/25.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/26.png',
          placeholder: '/margaret/placeholders/26.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/27.png',
          placeholder: '/margaret/placeholders/27.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/28.png',
          placeholder: '/margaret/placeholders/28.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/29.png',
          placeholder: '/margaret/placeholders/29.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/30.png',
          placeholder: '/margaret/placeholders/30.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/31.png',
          placeholder: '/margaret/placeholders/31.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/32.png',
          placeholder: '/margaret/placeholders/32.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/33.png',
          placeholder: '/margaret/placeholders/33.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/34.png',
          placeholder: '/margaret/placeholders/34.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/35.png',
          placeholder: '/margaret/placeholders/35.png',
          width: 1000,
          height: 563
        },
        {
          url: '/margaret/36.png',
          placeholder: '/margaret/placeholders/36.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/37.png',
          placeholder: '/margaret/placeholders/37.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/38.png',
          placeholder: '/margaret/placeholders/38.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/39.png',
          placeholder: '/margaret/placeholders/39.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/40.png',
          placeholder: '/margaret/placeholders/40.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/41.png',
          placeholder: '/margaret/placeholders/41.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/42.png',
          placeholder: '/margaret/placeholders/42.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/43.png',
          placeholder: '/margaret/placeholders/43.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/44.png',
          placeholder: '/margaret/placeholders/44.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/45.png',
          placeholder: '/margaret/placeholders/45.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/46.png',
          placeholder: '/margaret/placeholders/46.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/47.png',
          placeholder: '/margaret/placeholders/47.png',
          width: 960,
          height: 540
        },
        {
          url: '/margaret/48.png',
          placeholder: '/margaret/placeholders/48.png',
          width: 960,
          height: 540
        }
      ]
    }
  }
}
</script>

<style></style>
