import React from 'react';

import Gallery from 'react-photo-gallery';

import Section from './Section';

const photos = [
  {
    src: 'http://lorempixel.com/400/200/nature/',
    width: 4,
    height: 3,
  },
  {
    src: 'http://lorempixel.com/700/700/nature/',
    width: 1,
    height: 1,
  },
  {
    src: 'http://lorempixel.com/400/200/nature/',
    width: 1,
    height: 1,
  },
  {
    src: 'http://lorempixel.com/500/500/nature/',
    width: 4,
    height: 3,
  },

];

const SiteGallery = () => (
  <Section title="Photos" id="photos">
    <Gallery photos={photos} />
  </Section>
);

export default SiteGallery;
