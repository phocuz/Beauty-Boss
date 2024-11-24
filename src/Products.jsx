import mainLogo from "./assets/logo.png";
import image from "./assets/image.png";
import Group1 from "./assets/Group1.png";
import Group2 from "./assets/Group2.png";
import Group3 from "./assets/Group3.png";


function Products() {
    return (
        <div className="m-5 flex flex-col gap-10">
            <div className="flex justify-around ">
            <img src={mainLogo} alt="logo" className="w-32 md:w-48 h-3"  />
            <div className="flex justify-center gap-4">
               <h3>Dashboard</h3>
               <h3>Your Order</h3>
               <h3>Products</h3>
            </div>

            <div className="flex justify-center gap-4">
                <img src={image} alt="image" />
                <h4 className="mt-2">Alex Ezyhdin</h4>
                <span className="mt-2">d</span>
            </div>
        </div>

        <div className="flex justify-around ">
            <div>
                <h1>SIMPLE QUICK <br /> AND EAZY</h1>
                <button>
                    create your Product
                </button>
                </div>
                <div>
                   <div>
                     <img src={Group1} alt="group-image1" className="h-20 w-16" />
                    <button>select the product</button>
                   </div>
                   <div>
                     <img src={Group2} alt="group-image1" className="h-20 w-16"/>
                    <button>select the product</button>
                   </div>
                   <div>
                     <img src={Group3} alt="group-image1" className="h-20 w-16" />
                    <button>select the product</button>
                   </div>
                </div>
            </div>
        </div>
        
    )
}

export default Products
