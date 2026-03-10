import styles from "./RepositoryCard.module.scss";
import licenseIcon from "@/assets/icons/Chield_alt.svg";
import branchIcon from "@/assets/icons/Nesting.svg";
import starIcon from "@/assets/icons/Star.svg";
function RepositoryCard({ name, description, license, licenseName, forks, stars, update }) {
  return (
    <div className={card}>
      <h3 className={styles[card__title]}>{name}</h3>
      <p className={styles[card__description]}>{description}</p>
      <div className={styles.cardDetails}>
        {license && (
          <p className={styles[cardDetails__item]}>
            <img src={licenseIcon} alt="license icon" />
            <span>{licenseName}</span>
          </p>
        )}
        <p className={styles[cardDetails__item]}>
          <img src={branchIcon} alt="branch icon" />
          <span>{forks}</span>
        </p>
        <p className={styles[cardDetails__item]}>
          <img src={starIcon} alt="star icon" />
          <span>{stars}</span>
        </p>
        <span className={styles[cardDetails__update]}>updated {update} days ago</span>
      </div>
    </div>
  );
}
export default RepositoryCard;
