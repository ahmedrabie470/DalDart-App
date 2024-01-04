import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home animate__animated animate__fadeIn">
        <div className="layer text-center d-flex animate__animated  animate__fadeIn justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="layer-content ">
              <div>
                <h1 className="text-light">One-Of-The Most Popular-App</h1>
              </div>
              <div>
                <h5 className="text-light ">Easy, Fun Exploring</h5>
              </div>
              <Link to="/new" className="btn bg-main mt-2 brdr-main text-light">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
