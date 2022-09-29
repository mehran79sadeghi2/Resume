import { useRef } from "react";
import styles from "./ProfilePicture.module.scss";
import profileImage from "./../../../../../../../assets/images/profile-picture.webp";
import useProfilePictureDetails from "./useProfilePictureDetails";
import { ReactComponent as CancelIcon } from "./../../../../../../../assets/icons/cancel.svg";

function ProfilePictureDetails(props) {
  const { mainPictureRef } = props;

  const { show, open, setOpen, detailContainerRef } =
    useProfilePictureDetails(mainPictureRef);

  if (!open && !show) {
    return null;
  }

  return (
    <div className={styles.ImageContainer}>
      <div
        ref={detailContainerRef}
        className={`${styles.ImageParent} ${styles.Details}`}
      >
        <img src={profileImage} alt={"avatar"} className={styles.Image} />
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

ProfilePictureDetails.defaultProps = {
  open: false,
};


function ProfilePicture() {
  const containerRef = useRef(null);

  return (
    <>
      <div className={styles.ImageContainer}>
        <div ref={containerRef} className={styles.ImageParent}>
          <img src={profileImage} alt={"avatar"} className={styles.Image} />
        </div>
      </div>
      <ProfilePictureDetails mainPictureRef={containerRef} />
    </>
  );
}

export default ProfilePicture;
