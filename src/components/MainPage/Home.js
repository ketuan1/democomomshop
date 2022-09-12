import Categories from "./Categories";
import Slider from "./Slider";
import './Home.css';

function Home() {
    return ( 
        // chua siler and categories
        <>
            <section className='home'>
                <div className='container d_flex'>
                    <Categories />
                    <Slider />
                </div>

            </section>
        </>
     );
}

export default Home;