import styles from "./Tabs.module.scss";
function Tabs({ label, value }) {
  return (
    <div className={styles.tabs}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
export default Tabs;
