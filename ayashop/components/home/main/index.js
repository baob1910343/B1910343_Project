import MainSwiper from "./swiper";
import Offers from "./offer";
import Menu from "./Menu";
import User from "./User";
import Header from "./Header";

export default function Main() {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center ">
        <div className="col-md-2 mr-1  rounded shadow-sm">
          <div className="">
            <Menu />
          </div>
        </div>
        <div className="col-md-10   ">
          <div className="row ">
            <div className="rounded shadow-sm ">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 mt-2">
              <div className="rounded shadow-sm  mt-2">
                <MainSwiper />
              </div>
              <div className="rounded shadow-sm  mt-2">
                <Offers />
              </div>
            </div>
            <div className="col-md-3 rounded shadow-sm mt-2">
              <div className="">
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
