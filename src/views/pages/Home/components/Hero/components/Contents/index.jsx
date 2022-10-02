import info from "../../../../../../../constants.json";
import Button from "../../../../../../shared-components/Button";
import styles from "./Contents.module.scss";
import { ReactComponent as EmailIcon } from "./../../../../../../../assets/icons/email.svg";
import { ReactComponent as LinkedinIcon } from "./../../../../../../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "./../../../../../../../assets/icons/github.svg";
import { ReactComponent as StackOverFlowIcon } from "./../../../../../../../assets/icons/stackoverflow.svg";

const {
  email,
  social_networks,
  description,
  profession,
  full_name,
  "resume-link": resumeLink,
} = info;

const iconLists = {
  linkedin: { icon: LinkedinIcon, label: "LinkedIn" },
  github: { icon: GithubIcon, label: "GitHub" },
  slackOverFlow: { icon: StackOverFlowIcon, label: "Stack Overflow" },
};

function Contents() {
  return (
    <div className={styles.ContentContainer}>
      {/* profession */}
      {Boolean(profession) && (
        <h4 className={styles.Profession}>{profession}</h4>
      )}

      {/* full name */}
      {Boolean(full_name) && <h1 className={styles.FullName}>{full_name}</h1>}

      {/* description */}
      {Boolean(description) && (
        <p className={styles.Description}>{description}</p>
      )}

      {/* email */}
      {email && (
        <div className={styles.EmailContainer}>
          <div className={styles.EmailIconContainer}>
            <EmailIcon className={styles.EmailIcon} />
          </div>
          <div className={styles.Email}>{email}</div>
        </div>
      )}

      {/* links section */}
      <div className={styles.ButtonsContainer}>
        {/* resume download */}
        {Boolean(resumeLink) && (
          <Button as={"a"} href={resumeLink} className={styles.DownloadButton}>
            Download CV
          </Button>
        )}

        {/* social network links */}
        {social_networks &&
          Object.keys(social_networks).map((linkItem) => {
            const { icon: IconComponent, label } = iconLists[linkItem];
            return (
              <a
                key={label}
                target="_blank"
                href={social_networks[linkItem]}
                className={styles.SotialLinkContainer}
                rel="noreferrer"
              >
                <IconComponent className={styles.SotialIcon} />
                <div className={styles.Label}>{label}</div>
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default Contents;
