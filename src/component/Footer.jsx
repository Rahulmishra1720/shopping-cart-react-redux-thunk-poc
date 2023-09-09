import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <Link to={"https://www.facebook.com/"} className="social mx-4 "><i aria-hidden="true" className="fa fa-facebook my-2" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Facebook"></i></Link>
      <Link to={"https://www.instagram.com/"} className="social mx-4 " ><i aria-hidden="true" className="fa fa-instagram my-2" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Instagram"></i></Link>
      <Link to={"https://www.youtube.com/"} className="social mx-4 " href="www.youtube.com"><i aria-hidden="true" className="fa fa-youtube my-2" style={{ fontSize: "20px" }} data-toggle="tooltip" title="Youtube"></i></Link>
    </div>
  )
};