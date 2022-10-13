import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import profileImageEmpty from '../../../../../../../assets/images/profile.webp';
import useProfilePictureDetails from './useProfilePictureDetails';
import { ReactComponent as CancelIcon } from '../../../../../../../assets/icons/cancel.svg';
import styles from './ProfilePicture.module.scss';
import profilePicture from '../../../../../../../assets/images/profile-picture.jpeg';
import info from '../../../../../../../constants.json';

const pictureModalRoot = document.getElementById('image-viewer');

const { show_avatar: showAvatar } = info;

/**
 * this is a clone of normal profile picture that
 *  appears on it and spread to the hole window
 */
function ProfilePictureDetails(props) {
  const { mainPictureRef, imageSrc, loading } = props;

  const {
    detailContainerRef,
    show,
    open,
    setOpen,
  } = useProfilePictureDetails(mainPictureRef);

  if (!open && !show) {
    return null;
  }

  const portal = (
    <div className={`${styles.ImageContainer} ${styles['ImageContainer--details']}`}>
      <div
        ref={detailContainerRef}
        className={`${styles.ImageParent} ${styles['ImageParent--details']}`}
      >
        <img src={imageSrc} alt='avatar' className={styles.Image} />
        <div className={`${styles.Loading} ${loading ? styles['Loading--show'] : ''}`} />
        {open && show && (
        <div
          className={styles.Close}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CancelIcon className={styles.Icon} />
        </div>
        )}
      </div>
    </div>
  );

  // we use portal to render the modal in div with image-viewer id
  //  besides the root div
  return createPortal(portal, pictureModalRoot);
}

ProfilePictureDetails.propTypes = {
  mainPictureRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  imageSrc: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

function ProfilePicture() {
  const containerRef = useRef(null);
  const [loadError, setLoadError] = useState(false);
  const [loading, setLoading] = useState(true);

  function onErrorHandler() {
    setLoadError(true);
    setLoading(false);
  }

  function onLoadHandler() {
    setLoading(false);
  }

  const imageSrc = loadError || !profilePicture || !showAvatar ? profileImageEmpty : profilePicture;

  return (
    <>
      <div className={styles.ImageContainer}>

        {/* picture */}
        <div ref={containerRef} className={styles.ImageParent}>
          <img
            onError={onErrorHandler}
            onLoad={onLoadHandler}
            src={imageSrc}
            alt='avatar'
            className={styles.Image}
          />
          <div className={`${styles.Loading} ${loading ? styles['Loading--show'] : ''}`} />
        </div>
      </div>

      {/* details of picture */}
      <ProfilePictureDetails
        loading={loading}
        imageSrc={imageSrc}
        mainPictureRef={containerRef}
      />
    </>
  );
}

export default ProfilePicture;
