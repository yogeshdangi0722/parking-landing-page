// import  '../style/scss/_home.scss';
import HomeSVG from "../assets/svg/Home.svg";
const Home = () => {
  return (
    <>
      <div className="section">
        <div className="row home-container gx-0">
          <div className="col-sm-8 col-md-8">
            <div className="wrap">
              <h1 className="h1-text">
                Digitize parking of any sizes maximize the revenue
              </h1>
              <div className="text">
                Experience effortless parking management with our innovative
                platform. From streamlining reservations to real-time
                availability updates. Seamlessly integrate with existing
                systems, optimize space utilisation, and enhance customer
                satisfaction. .
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-4">
            <div className="gallery">
              <div className="heroWrapper">
                <img
                  className="preview"
                  layout="fill"
                  src={HomeSVG}
                  placeholder="blur"
                  objectFit="cover"
                  alt="Team"
                />
              </div>
            </div>
          </div>
        </div>
        
          </div>
          <div className="btns">

          <button aria-hidden="true" className="button mt-3">
            Request a Demo
          </button>
          </div>
       
    </>
  );
};

export default Home;
