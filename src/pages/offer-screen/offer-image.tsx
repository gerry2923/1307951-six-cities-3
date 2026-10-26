import React from 'react';

function OfferImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className='offer__image-wrapper'>
      <img className='offer__image' src={imageUrl} alt='Photo studio' />
    </div>
  );
}

export default React.memo(OfferImage);
