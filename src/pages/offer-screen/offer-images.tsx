import { useMemo } from 'react';
import { TOffer } from '../../components/types';
import OfferImage from './offer-image';

function OfferImages({ offer }: { offer: TOffer | null }) {
  const images = useMemo(() => {
    const mapped = offer?.images?.map((imageUrl, index) => ({
      id: index,
      url: imageUrl,
    })) ?? [];

    return mapped.length > 6 ? mapped.slice(0, 6) : mapped;
  }, [offer?.images]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      {
        images.map((image) => (
          <OfferImage key={image.id} imageUrl={image.url} />
        ))
      }
    </>
  );
}

export default OfferImages;
