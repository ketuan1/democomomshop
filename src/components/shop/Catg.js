function Catg() {

    const data = [
        {
          cateImg: "./images/category/cat-3.png",
          cateName: "Apple",
        },
      {
        cateImg: "./images/category/cat-2.png",
        cateName: "Myphone",
      }, {
        cateImg: "./images/category/cat-2.png",
        cateName: "Myphone",
       }
        
      ]
    return ( 
        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1>Brands</h1>
                    <h1>Shop</h1>
                </div>
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
                <div className='box box2'>
                    <button>View All brands</button>
                </div>
            </div>
        </>
     );
}

export default Catg;