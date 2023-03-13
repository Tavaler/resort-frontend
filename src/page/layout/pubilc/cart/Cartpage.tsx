import React from "react";

function Cartpage() {
  return (
    <div className="">


      {/* <!-- Nav --> */}
      {/* <nav className="navbar navbar-inverse bg-inverse fixed-top bg-faded">
        
      </nav> */}
      
      <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#cart"
            >
              Cart (<span className="total-count"></span>)
            </button>
            <button className="clear-cart btn btn-danger">Clear Cart</button>
          </div>
        </div>

      {/* <!-- Main --> */}

      {/* <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card"
              // style="width: 20rem;"
            >
              <img
                className="card-img-top"
                src="http://www.azspagirls.com/files/2010/09/orange.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Orange</h4>
                <p className="card-text">Price: $0.5</p>
                <a
                  href="#"
                  data-name="Orange"
                  data-price="0.5"
                  className="add-to-cart btn btn-primary"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              // style="width: 20rem;"
            >
              <img
                className="card-img-top"
                src="http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Banana</h4>
                <p className="card-text">Price: $1.22</p>
                <a
                  href="#"
                  data-name="Banana"
                  data-price="1.22"
                  className="add-to-cart btn btn-primary"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              // style="width: 20rem;"
            >
              <img
                className="card-img-top"
                src="https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg"
                alt="Card image cap"
              />
              <div className="card-block">
                <h4 className="card-title">Lemon</h4>
                <p className="card-text">Price: $5</p>
                <a
                  href="#"
                  data-name="Lemon"
                  data-price="5"
                  className="add-to-cart btn btn-primary"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="cart"
        // tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="show-cart table"></table>
              <div>
                Total price: $<span className="total-cart"></span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Order now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartpage;
