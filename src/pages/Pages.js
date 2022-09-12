import Annu from "../components/annocuments/Annu";
import Contact from "../components/contact/Contact";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";


//truyen props qua
function Pages({productItems, cartItem, addToCart, shopItems}) {
    return ( 
        // chứa home and flashcard and topcate and newArrivals and discount and shop and annu and wrapper
        <>
            <Home cartItem={cartItem} />
            <FlashDeals productItems={productItems} addToCart={addToCart} />
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop shopItems={shopItems} addToCart={addToCart} />
            <Annu />
            <Wrapper />
            <Contact />
            {/* <Footer /> */}
        </>
     );
}

export default Pages;