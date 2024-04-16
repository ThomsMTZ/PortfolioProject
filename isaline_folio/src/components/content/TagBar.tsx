import styles from "./TagBar.module.scss";
import Tags from "./Tags";

function TagBar() {
  return (
    <>
      <div
        className={` ${styles.tagBar} d-flex flex-row align-items-center justify-content-center p-10`}
      >
        <Tags name="Print" />
        <Tags name="AD" />
        <Tags name="Branding" />
        <Tags name="Social Media" />
        <Tags name="Web Design" />
        <Tags name="3D" />
        <Tags name="Photography" />
        <Tags name="Teamwork" />
      </div>
    </>
  );
}

export default TagBar;
