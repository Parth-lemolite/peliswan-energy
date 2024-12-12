import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
// import Product1 from "../../public/image";

const Products = () => {
  const products = [
    { id: "prodcut_1", title: "Product 1", image: "/image/product1.png" },
    { id: "prodcut_2", title: "Product 2", image: "/image/product1.png" },
    { id: "prodcut_3", title: "Product 3", image: "/image/product1.png" },
    { id: "prodcut_4", title: "Product 4", image: "/image/product1.png" },
    { id: "prodcut_5", title: "Product 5", image: "/image/product1.png" },
    { id: "prodcut_6", title: "Product 6", image: "/image/product1.png" },
    { id: "prodcut_7", title: "Product 7", image: "/image/product1.png" },
    { id: "prodcut_8", title: "Product 8", image: "/image/product1.png" },
  ];

  return (
    <section
      className="bg-white py-6 md:py-12 text-center w-full bg-[url('/image/dot-bg.png')] bg-cover bg-no-repeat"
      id="products"
    >
      <div className="inline-block px-4 border-b-2 border-gradient rounded-md">
        <h2 className="text-3xl font-semibold text-gray-900">Products</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-4 md:px-16 mt-6">
        {products.map((product) => (
          <div key={product.id} className=" rounded-lg  overflow-hidden">
            {/* Image Container */}
            <Link href={"product_1"}>
              <div className="h-32 md:h-60 relative group">
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain" /* Ensure the full image is visible inside the container */
                  className="rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
            </Link>

            {/* Content */}
            <div className="md:p-4">
              <h3 className="text-lg font-medium text-gray-800">
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
