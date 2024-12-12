import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const products = [
  {
    id: "product_1",
    title: "Inverter",
    categories: [
      {
        title: "Category 1",
        image: "/image/category1.jpg",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.",
      },
      {
        title: "Category 2",
        image: "/image/category2.jpg",
        description:
          "Suspendisse potenti. In hac habitasse platea dictumst. Curabitur tempor nulla quis eros gravida, nec viverra neque sodales.",
      },
      {
        title: "Category 3",
        image: "/image/category3.jpg",
        description:
          "Proin luctus sapien a aliquam tincidunt. Donec efficitur ligula nec magna volutpat, ut sodales risus feugiat.",
      },
    ],
  },
];

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-4 md:px-16 mt-12 py-8">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          {product.title}
        </h1>

        {/* Centered Image */}
        <div className="w-full max-w-4xl mb-12">
          <Image
            src="/image/karsten-wurth-ZKWgoRUYuMk-unsplash.jpg"
            alt={product.title}
            width={1200}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Zig-Zag Pattern Section */}
        <div className="w-full max-w-6xl space-y-16">
          {product.categories.map((category, index) => (
            <div
              key={category.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start md:gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <h2 className="text-2xl font-semibold mb-4">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
