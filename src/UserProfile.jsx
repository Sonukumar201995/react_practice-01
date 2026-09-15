import styles from "./css/style.module.css";


function UserProfile() {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Avatar"
      />

      <h4>Sonu Kumar</h4>
      <p>Software Engineer</p>
    </div>
  );
}

export default UserProfile;