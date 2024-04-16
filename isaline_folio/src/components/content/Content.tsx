import styles from "./Content.module.scss";
import TagBar from "./TagBar";
import blast from "../../assets/images/mockup depliant 1.png";
import novaProspectus from "../../assets/images/Instagram post - 80.png";
import portrait from "../../assets/images/Instagram post - 76.png";
import ad from "../../assets/images/Instagram post - 77.png";
import novaShirt from "../../assets/images/Instagram post - 78.png";
import pong from "../../assets/images/mockup depliant 1 (1).png";
import house from "../../assets/images/mockup depliant 1 (2).png";
import books from "../../assets/images/mockup depliant 1 (3).png";
import magazine from "../../assets/images/Instagram post - 80 (1).png";
import flowers from "../../assets/images/Instagram post - 80 (2).png";
import website from "../../assets/images/mockup depliant 1 (4).png";
import novaChart from "../../assets/images/Instagram post - 76 (1).png";
import websiteInterface from "../../assets/images/Instagram post - 77 (1).png";
import mobileInterface from "../../assets/images/Instagram post - 78 (1).png";

function Content() {
  return (
    <>
      <div>
        <TagBar />
      </div>

      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={novaProspectus} className={`${styles.imgContainer}`}></img>
        <img src={blast} className={`${styles.imgContainer}`}></img>
      </div>
      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={portrait} className={`${styles.imgContainer}`}></img>
        <img src={ad} className={`${styles.imgContainer}`}></img>
        <img src={novaShirt} className={`${styles.imgContainer}`}></img>
      </div>
      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={pong} className={`${styles.imgContainer}`}></img>
        <img src={house} className={`${styles.imgContainer}`}></img>
      </div>

      <div className={`d-flex flex-row justify-content-center title`}>LAB</div>

      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={books} className={`${styles.imgContainer}`}></img>
        <img src={magazine} className={`${styles.imgContainer}`}></img>
      </div>
      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={flowers} className={`${styles.imgContainer}`}></img>
        <img src={website} className={`${styles.imgContainer}`}></img>
      </div>
      <div className={`${styles.grid} d-flex flex-row justify-content-center p-40 gap-20`}>
        <img src={novaChart} className={`${styles.imgContainer}`}></img>
        <img src={websiteInterface} className={`${styles.imgContainer}`}></img>
        <img src={mobileInterface} className={`${styles.imgContainer}`}></img>
      </div>
    </>
  );
}

export default Content;
