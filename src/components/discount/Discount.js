import Dcard from "./Dcard";

function Discount() {
  return (
    <>
      <section className="discountt background newarrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row f_flex">
            <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' alt="" />
              <h2>Big discount</h2>
            </div>
            <div className="heading-right row">
              <span>View details</span>
              <i className="fa fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
    </section>
    </>
  );
}

export default Discount;
