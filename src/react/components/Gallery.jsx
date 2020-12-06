import React from 'react';

import Gallery from 'react-photo-gallery';

import Section from './Section';

const PHOTOS = [
  {
    src: '/tylie-1.jpg',
    width: 1.5,
    height: 2,
  },
  {
    src: '/tylie-2.jpg',
    width: 1.5,
    height: 2,
  },
  {
    src: '/tylie-4.jpg',
    width: 1.5,
    height: 2,
  },
  {
    src: '/tylie-3.jpg',
    width: 5,
    height: 4,
  },
  {
    src: '/tylie-5.jpg',
    width: 1,
    height: 2,
  },
  {
    src: '/tylie-6.jpg',
    width: 10,
    height: 6,
  },
  {
    src: '/order-of-service.jpg',
    width: 8,
    height: 8,
  },
];

const SiteGallery = () => (
  <Section title="Photos" id="photos">
    <Gallery photos={PHOTOS} direction="row" />
  </Section>
);

export default SiteGallery;
