import React from 'react';

import Gallery from 'react-photo-gallery';

import Section from './Section';

const photos = [
  {
    src: '/tylie-1.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/tylie-2.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/tylie-4.jpg',
    width: 1,
    height: 1,
  },
  {
    src: '/tylie-3.jpg',
    width: 5,
    height: 4,
  },

];

const SiteGallery = () => (
  <Section title="Photos" id="photos">
    <Gallery photos={photos} direction="column" />
  </Section>
);

export default SiteGallery;
