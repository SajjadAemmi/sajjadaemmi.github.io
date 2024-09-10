function getCroppedBoundsOffset(position, imageSize, thumbSize, zoomLevel) {
  const float = parseFloat(position);

  return position.indexOf('%') > 0
    ? (thumbSize - imageSize * zoomLevel) * float / 100
    : float;
}

function getCroppedZoomPan(position, min, max) {
  const float = parseFloat(position);

  return position.indexOf('%') > 0 ? min + (max - min) * float / 100 : float;
}

function getThumbnail(el) {
  return el.querySelector('img');
}

function getObjectPosition(el) {
  return getComputedStyle(el).getPropertyValue('object-position').split(' ');
}

export default class ObjectPosition {
  constructor(lightbox) {
    /**
     * Make pan adjustments if large image doens't fit the viewport.
     *
     * Examples:
     * 1. When thumb object-position is 50% 0 (top part is initially visible)
     *    make sure you'll see the top part of the large image as well.
     * 2. When thumb object-position is 50% 100% (bottom part is initially visible)
     *    make sure you'll see the bottom part of the large image as well.
     */
    lightbox.on('initialZoomPan', (event) => {
      const slide = event.slide;
      const [positionX, positionY] = getObjectPosition(getThumbnail(slide.data.element));

      if (positionX !== '50%' && slide.pan.x < 0) {
        slide.pan.x = getCroppedZoomPan(positionX, slide.bounds.min.x, slide.bounds.max.x);
      }

      if (positionY !== '50%' && slide.pan.y < 0) {
        slide.pan.y = getCroppedZoomPan(positionY, slide.bounds.min.y, slide.bounds.max.y);
      }
    });

    /**
     * Fix opening animation when thumb object-position is not 50% 50%.
     * https://github.com/dimsemenov/PhotoSwipe/pull/1868
     */
    lightbox.addFilter('thumbBounds', (thumbBounds, itemData) => {
      const thumbEl = getThumbnail(itemData.element);
      const thumbAreaRect = thumbEl.getBoundingClientRect();
      const fillZoomLevel = thumbBounds.w / itemData.width;
      const [positionX, positionY] = getObjectPosition(thumbEl);

      if (positionX !== '50%') {
        const offsetX = getCroppedBoundsOffset(positionX, itemData.width, thumbAreaRect.width, fillZoomLevel);
        thumbBounds.x = thumbAreaRect.left + offsetX;
        thumbBounds.innerRect.x = offsetX;
      }

      if (positionY !== '50%') {
        const offsetY = getCroppedBoundsOffset(positionY, itemData.height, thumbAreaRect.height, fillZoomLevel);
        thumbBounds.y = thumbAreaRect.top + offsetY;
        thumbBounds.innerRect.y = offsetY;
      }

      return thumbBounds;
    });
  }
}
