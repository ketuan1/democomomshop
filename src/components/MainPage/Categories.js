

function Categories() {
    //data(API)
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Fashion",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Fashion2",
        },
        {
            cateImg: "./images/category/cat-3.png",
            cateName: "Fashion3",
          },
    ]
    return ( 
        <>
            <div className="category">
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f-flex" key={index}>
                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>

                            </div>
                        )
                    })
                }
            </div>
        </>
     );
}

export default Categories;