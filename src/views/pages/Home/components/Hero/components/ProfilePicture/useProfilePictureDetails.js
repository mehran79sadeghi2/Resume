import { useEffect, useRef, useState } from 'react';

function useProfilePictureDetails(mainPictureRef) {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const detailContainerRef = useRef(null);

  useEffect(function clickHandle() {
    function pictureClickHandler() {
      setOpen(!open);
    }
    mainPictureRef.current.addEventListener('click', pictureClickHandler);
  }, []);

  useEffect(
    function setDetailPosition() {
      if (open && show && detailContainerRef.current) {
        detailContainerRef.current.style.top = '0px';
        detailContainerRef.current.style.left = '0px';
        detailContainerRef.current.style.width = '100%';
        detailContainerRef.current.style.height = '100%';
        detailContainerRef.current.style.borderRadius = '0px';
        detailContainerRef.current.style.pointerEvents = 'all';
        detailContainerRef.current.style.backgroundColor = 'var(--background-color-3)';
      } else if ((open || show) && detailContainerRef.current) {
        function setRect() {
          if (mainPictureRef.current) {
            const rect = mainPictureRef.current.getBoundingClientRect();
            detailContainerRef.current.style.width = `${rect.width}px`;
            detailContainerRef.current.style.height = `${rect.width}px`;
            detailContainerRef.current.style.borderRadius = '50%';
            detailContainerRef.current.style.top = `${rect.top}px`;
            detailContainerRef.current.style.left = `${rect.left}px`;
            detailContainerRef.current.style.pointerEvents = 'all';
            detailContainerRef.current.style.backgroundColor = 'var(--background-color-2)';
            if (!open) {
              detailContainerRef.current.style.boxShadow = '0 0 0px 0 transparent';
            }
          }
        }
        setRect();

        window.addEventListener('resize', setRect);
        window.addEventListener('scroll', setRect);

        return function componentWillUnmount() {
          window.removeEventListener('resize', setRect);
          window.removeEventListener('scroll', setRect);
        };
      }
      return () => null;
    },
    [open, show],
  );

  useEffect(
    function openDetailHandler() {
      setTimeout(
        () => {
          setShow(open);
        },
        open ? 50 : 500,
      );
    },
    [open],
  );

  return {
    show,
    detailContainerRef,
    open,
    setOpen,
  };
}

export default useProfilePictureDetails;
