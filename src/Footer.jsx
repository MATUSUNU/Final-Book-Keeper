
const date = new Date();
const current_year = date.getFullYear();

function Footer() {
  return (
    <p className="footer">Copyright @ {current_year}</p>
  )
}

export default Footer;