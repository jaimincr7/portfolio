const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/ajmoradiya6">
        <i className="fa-brands fa-github" aria-hidden="true" title="Jaimin Vyas' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/akshay-moradiya/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Jaimin Vyas' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/akshay_moradiya/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Jaimin Vyas' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/ajmoradiya6">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Jaimin Vyas' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
