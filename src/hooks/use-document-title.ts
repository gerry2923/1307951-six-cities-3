import { useEffect, useRef } from 'react';

const useDocumentTitle = (title:string) => {
  const documentDefined = typeof document !== 'undefined';
  const originalTitle = useRef(documentDefined ? document.title : null);
  const currentTitle = originalTitle.current;

  useEffect(() => {
    if (!documentDefined) {
      return;
    }

    if (document.title !== title) {
      document.title = title;
    }

    return () => {
      if(currentTitle) {
        document.title = currentTitle;
      }
    };
  }, [title]);

};

export { useDocumentTitle };
