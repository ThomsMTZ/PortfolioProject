import styles from "./Tags.module.scss";
function Tags({name}) {
  return (
    <>
    <div className="d-flex flex-row p-10">
      <button className={`${styles.tags} d-flex flex-row p-10 btn`}>{name}</button>
    </div>
    </>
  );
}

export default Tags;
