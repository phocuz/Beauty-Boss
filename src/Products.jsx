
import mainLogo from "./assets/logo.png";
import image from "./assets/image.png";
import Group1 from "./assets/Group1.png";
import Group2 from "./assets/Group2.png";
import Group3 from "./assets/Group3.png";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import arrow from "./assets/arrow.png";
import scroll from "./assets/scroll.png"
import vector from "./assets/vector.png"
import vector1 from "./assets/vector1.png"
import { Link } from "react-router-dom";

const products =[
                        { 
                            button: "Best Seller", 
                            image: image2, 
                            title: "DEW YOU", 
                            subtitle: "Hyaluronic Acid Serum" 
                        },
                        { 
                            button: "now", 
                            image: image1, 
                            title: "BARELY THERE", 
                            subtitle: "Lightweight Moisturizer" 
                        },
                        { 
                            button: "sales 5%", 
                            image: image3, 
                            title: "DESTRESS", 
                            subtitle: "Calming Serum",
                            hasArrow: true
                        }
                    ]

function Products() {
    return (
        <div className="container mx-auto px-4 py-5">
            {/* Navigation */}
            <div className="flex  md:flex-row justify-between items-center mb-10">
                <Link to="/"><img src={mainLogo} alt="logo" className="w-32 md:w-48 h-auto mb-4 md:mb-0" /></Link>
                <div className="sm:flex flex-wrap hidden justify-center gap-4 mb-4 md:mb-0">
                    <h3 className="cursor-pointer hover:text-gray-600">Dashboard</h3>
                    <h3 className="cursor-pointer hover:text-gray-600">Your Order</h3>
                    <h3 className="cursor-pointer hover:text-gray-600">Products</h3>
                </div>
                <div className="flex items-center gap-4">
                    <img src={image} alt="profile" className="w-10 h-10 rounded-full hover:border-blue-500 border-4 transition delay-75 " />
                    <h4>Alex Ezyhdin</h4>
                    <img src={scroll} alt="scroll-bar" />
                </div>
            </div>

            {/* Hero Section */}
            <div className="flex flex-col relative lg:flex-row justify-around items-center bg-gradient-to-t from-yellow-100 to-white border-2 border-black rounded-lg shadow-[5px_5px_0px_0px_black] p-6 mb-10">
                <div className="flex flex-col justify-center items-start mb-6 lg:mb-0 lg:mr-10">
                    <h1 className="font-extrabold text-3xl leading-tight text-black mb-6">
                        SIMPLE, QUICK <br /> AND EASY
                    </h1>
                    <button
                        onClick={() => alert("Product successfully created")}
                        className="w-48 border-2 rounded-lg border-black h-12 bg-customRed shadow-[3px_3px_0px_0px_black] hover:shadow-none transition-shadow duration-200"
                    >
                        Create Your Product
                    </button>
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-16 items-center">
                    <img src={vector} alt=""  className="absolute  right-56 z-10 "/>
                    <img src={vector1} alt=""  className="absolute left-56 z-10 "/>
                    {[Group1, Group2, Group3].map((product, index) => (
                        <div key={index} className="flex flex-col items-center  gap-2">
                            <img src={product} alt="products" className="w-[175px] h-[160px]" />
                            <button className="w-40 text-center border-2 rounded-md border-black bg-white h-10 shadow-[3px_3px_0px_0px_black] hover:shadow-none transition-shadow duration-200">
                                Select Product
                            </button>
                        </div>
                        
                    ))}
                </div>
            </div>

            {/* Popular Items */}
            <div className="flex flex-col items-center">
                <h1 className="text-center text-3xl font-bold mb-8">POPULAR ITEM</h1>
                <div className="grid grid-cols-1 md:grid-cols-3  w-full max-w-[1250px]">
                    {products.map((product, index) => (
                        <div key={index} className="relative flex flex-col border-2 border-black h-[500px] overflow-hidden">
                            {product.hasArrow && (
                                <img 
                                    src={arrow} 
                                    alt="arrow" 
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" 
                                />
                            )}
                            <button className="text-center m-2 w-[95px] border-2 border-black text-sm font-semibold shadow-[0px_2px_0px_0px_black] text-black capitalize">
                                {product.button}
                            </button>
                            <div className="flex flex-col items-center justify-center flex-grow gap-4">
                                <img 
                                    src={product.image} 
                                    alt="Product" 
                                    className="w-28 h-44 object-cover" 
                                />
                                <div className="text-center">
                                    <h1 className="font-extrabold text-lg leading-6">{product.title}</h1>
                                    <h3 className="text-xs text-gray-500">{product.subtitle}</h3>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                {["From", "From", "From"].map((label, priceIndex) => (
                                    <div 
                                        key={priceIndex} 
                                        className={`text-center border-2 border-black w-1/3 p-2 ${priceIndex === 2 ? 'bg-yellow-200' : ''}`}
                                    >
                                        <h6 className="text-xs text-gray-500">{label}</h6>
                                        <h2 className="text-base font-semibold">$7.88</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;