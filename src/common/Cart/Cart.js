import './style.css';

function Cart({ cartItem, addToCart, decreaseQty }) {

   // calucate total price of items
    const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0);
    
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            
            {/* function */}
            {cartItem.length === 0 && <h1 className="no-items product">No items are add cart</h1>}

            {cartItem.map((item, index) => {
            
              {/* price * quantity */}
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={index}>
                  <div className="img">
                    {/* data */}
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    {/* data */}
                    <h3>{item.name}</h3>
                    {/* data */}
                    <h4>
                      {item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  {/* remove cart */}
                  <div className="cart-items-function">
                    {/* <div className="removeCart">
                      <button>
                         <i className="fa -solid fa-xmark"></i> 
                      </button>
                    </div> */}
                    <div className="cartControl d_flex">
                      {/* button add */}
                      <button className="incCart" onClick={() => addToCart(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      {/*button  minus */}
                      <button className="desCart" onClick={() => decreaseQty(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=" d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
