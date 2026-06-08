import styles from "./UserProfile.module.scss";
import Tabs from "@/shared/ui/Tabs/Tabs";
function UserProfile({ user }) {
  if (!user) return null;
  return (
    <div>
      <div className={styles.userProfile}>
        <img className={styles.avatar} src={user.avatar_url} alt={`${user.name} avatar`} />
        <div className={styles.tabsGrid}>
          <Tabs label={"Followers"} value={user.followers}></Tabs>
          <Tabs label={"Following"} value={user.following}></Tabs>
          <Tabs label={"Location"} value={user.location}></Tabs>
        </div>
      </div>
      <div className={styles.userInfo}>
        <h2 className={styles.name}>{user.name}</h2>
        <p className={styles.bio}>{user.bio || "No bio provided"}</p>
      </div>
    </div>
  );
}
export default UserProfile;
