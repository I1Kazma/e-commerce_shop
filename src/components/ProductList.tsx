"use client";

import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq()
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
  console.log(res);
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/c1/f2/1d/c1f21dd2419929fe033ebf550773d148.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white transition ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/c1/f2/1d/c1f21dd2419929fe033ebf550773d148.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white transition ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/c1/f2/1d/c1f21dd2419929fe033ebf550773d148.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white transition ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://i.pinimg.com/736x/dc/46/8b/dc468be47bc0cf1324c092f776383709.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://i.pinimg.com/736x/c1/f2/1d/c1f21dd2419929fe033ebf550773d148.jpg"
            fill
            sizes="25vw"
            alt=""
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        <button className="rounded-2xl ring-1 ring-main text-main w-max py-2 px-4 text-xs hover:bg-main hover:text-white transition ease-in-out">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
