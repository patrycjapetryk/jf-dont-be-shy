import './src/scss/main.scss';
import { switchVideos } from './src/js/switchVideos';
import { scroll } from './src/js/carousel';

const videoGalleries = document.querySelectorAll('.video-gallery--js');
const scrollCarousel = document.querySelectorAll('.scroll-carousel--js');

switchVideos(videoGalleries);

scrollCarousel.forEach((item) => {
  scroll(item, 350);
});
