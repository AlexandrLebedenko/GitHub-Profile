import styles from "./RepositoryCard.module.scss";
import licenseIcon from "@/assets/icons/Chield_alt.svg";
import branchIcon from "@/assets/icons/Nesting.svg";
import starIcon from "@/assets/icons/Star.svg";
function RepositoryCard({ name, description }) {
  return (
    <div className={card}>
      <h3 className={styles[card__title]}>{name}</h3>
      <p className={styles[card__description]}>{description}</p>
      <div className={styles.cardDetails}>
        <p>
          <img src={licenseIcon} alt="license icon" />
          <span>{}</span>
        </p>
        <p>
          <img src={branchIcon} alt="branch icon" />
          <span>{}</span>
        </p>
        <p>
          <img src={starIcon} alt="star icon" />
          <span>{}</span>
        </p>
      </div>
    </div>
  );
}
export default RepositoryCard;
