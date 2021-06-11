const PREVIEW_DIMENSION = 44

export const createVideo = (src) =>
  new Promise(resolve => {
    const video = document.createElement('video');
    video.onloadeddata = () => resolve(video);
    video.src = src;
    video.width = PREVIEW_DIMENSION;
    video.height = PREVIEW_DIMENSION;
    video.crossOrigin = 'Anonymous';
    video.style.objectFit = 'cover';
    video.autoplay = true;
    video.muted = true;
  });

export const getVideoDataUrl = (video) =>
  new Promise(resolve => {
    video.play().then(() => {
      const canvas = document.createElement('canvas');
      canvas.width = PREVIEW_DIMENSION;
      canvas.height = PREVIEW_DIMENSION;
      const vidRatio = video.videoWidth / video.videoHeight;
      const videoWidth = vidRatio < 1 ? canvas.width : canvas.height * vidRatio;
      const videoHeight = vidRatio < 1 ? canvas.width / vidRatio : canvas.height;
      canvas
        .getContext('2d')
        .drawImage(
          video,
          (canvas.width - videoWidth) / 2,
          (canvas.height - videoHeight) / 2,
          videoWidth,
          videoHeight
        );
      const dU = canvas.toDataURL();
      video.pause();
      resolve(dU);
    });
  });

export const getVideoPreview = async (src) => {
  const video = await createVideo(src);
  const dataUrl = await getVideoDataUrl(video);
  return dataUrl;
};

export const getImagePreview = (src) => {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = PREVIEW_DIMENSION;
      canvas.width = PREVIEW_DIMENSION;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const imgWidth = imgRatio < 1 ? canvas.width : canvas.height * imgRatio;
      const imgHeight = imgRatio < 1 ? canvas.width / imgRatio : canvas.height;
      ctx.drawImage(
        img,
        (canvas.width - imgWidth) / 2,
        (canvas.height - imgHeight) / 2,
        imgWidth,
        imgHeight
      );
      const dataURL = canvas.toDataURL();
      resolve(dataURL);
    };
    img.src = src;
  });
};