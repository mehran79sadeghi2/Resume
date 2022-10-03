import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import profileImage from '../../../../../../../assets/images/profile.webp';
import info from '../../../../../../../constants.json';
import useProfilePictureDetails from './useProfilePictureDetails';
import { ReactComponent as CancelIcon } from '../../../../../../../assets/icons/cancel.svg';
import styles from './ProfilePicture.module.scss';

const { avatar } = info;
// console.log(avatar);
window.avatar = avatar;

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

  return (
    <div className={styles.ImageContainer}>
      <div
        ref={detailContainerRef}
        className={`${styles.ImageParent} ${styles.Details}`}
      >
        <img src={imageSrc} alt='avatar' className={styles.Image} />
        <div className={`${styles.Loading} ${loading ? styles.Show : ''}`} />
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
}

ProfilePictureDetails.propTypes = {
  mainPictureRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.oneOf([PropTypes.instanceOf(Element), null]),
    }),
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

  const imageSrc = loadError || !avatar ? profileImage : avatar;

  return (
    <>
      <div className={styles.ImageContainer}>
        <div ref={containerRef} className={styles.ImageParent}>
          <img
            onError={onErrorHandler}
            onLoad={onLoadHandler}
            src={imageSrc}
            alt='avatar'
            className={styles.Image}
          />
          <div className={`${styles.Loading} ${loading ? styles.Show : ''}`} />
        </div>
      </div>
      <ProfilePictureDetails
        loading={loading}
        imageSrc={imageSrc}
        mainPictureRef={containerRef}
      />
    </>
  );
}

export default ProfilePicture;
