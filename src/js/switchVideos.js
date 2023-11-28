export function switchVideos(videoGalleries) {
  videoGalleries.forEach((videoGallery) => {
    const videos = videoGallery.querySelectorAll('.video-gallery__video--js');
    const colors = videoGallery.querySelectorAll('.colors__item--js');

    const changeVideoVisibility = (index) => {
      videos.forEach((video) => {
        video.style.visibility = 'hidden';
        videos[index].style.visibility = 'visible';
      });
    };

    colors.forEach((color, index) => {
      color.addEventListener('click', () => {
        changeVideoVisibility(index);
      });
    });
  });
}
