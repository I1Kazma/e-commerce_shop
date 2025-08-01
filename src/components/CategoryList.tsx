import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const cats = [
    {
      _id: 1,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      _id: 2,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/c1/f2/1d/c1f21dd2419929fe033ebf550773d148.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      _id: 3,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/5d/29/e5/5d29e5fb77e68fc4731ae45e49babecd.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
      _id: 4,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/5d/29/e5/5d29e5fb77e68fc4731ae45e49babecd.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
      _id: 5,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/5d/29/e5/5d29e5fb77e68fc4731ae45e49babecd.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
      _id: 6,
      name: "Category Name",
      description: "Sale! Up to 50% off!",
      media:
        "https://i.pinimg.com/736x/5d/29/e5/5d29e5fb77e68fc4731ae45e49babecd.jpg",
      slug: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cats.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={item.media || "cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
