import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="border">
          <div className="row bg-white text-dark p-4">
            <div className="col">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg" alt="" width={100} height={75}/>
              <span className="mt-2">@copyright</span>
              </div>
            </div>
            <div className="col">
              <div class="d-flex flex-column-reverse">
                <div class="p-2">  <NavLink to="/policy" className="header-logo mt-3">policy</NavLink></div>
                <div class="p-2"> <NavLink to="/tnc" className="header-logo mt-3">tnc</NavLink></div>
                <div class="p-2"> item 3</div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div class="d-flex flex-column-reverse">
                <div class="p-2"> item 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
