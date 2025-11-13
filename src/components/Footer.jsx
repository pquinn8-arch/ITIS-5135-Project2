function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Precious’ Garden Blog. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#282c34',
    color: 'white',
    marginTop: '2rem',
  },
};

export default Footer;
