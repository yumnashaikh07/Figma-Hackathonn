"use client";

import { UseCart } from "../../../../action/usecart";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Header from "@/components/header";

interface Product {
  productImage: {
    asset: {
      url: string;
    };
  };
  description: string;
  title: string;
  price: number;
  tags: string[];
  discountPercentage: number;
  isNew: boolean;
  slug: string;
  quantity:number
}

const ProductList = () => {
  const params = useParams();
  const slug = params?.slug;
 const AddToCart = UseCart((state :any) => state.AddToCart);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (!slug) return;
        const query = `*[_type == "product" && slug.current == $slug]{
          productImage {
            asset -> {
              asset,
              url
            }
          },
          description,
          title,
          price,
          tags,
          discountPercentage,
          isNew,
          quantity,
          "slug": slug.current
        }`;

        const data = await client.fetch(query, { slug });
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [slug]);

  if (loading) {
    return (
      
      <section className="p-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="">
            <Skeleton className="w-full h-[430px] rounded-lg" />
            </div>
            <div className="space-y-3"><Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-5 w-2/3" />
            <span className="flex justify-between "> <Skeleton className="h-12 w-1/3" /><Skeleton className="h-12 w-1/3  " /></span></div>
          
        </div>
      </section>
     
    );
  }

  if (!products.length) return <div>No products found.</div>;

  return (
    <main><Header/>
    <section>
      {products.map((product) => (
        <div key={product.slug}>
          <div className="p-20 mr-28 mt-16 space-x-5 grid grid-cols-1 md:flex md:justify-between">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                className="w-full max-w-[500px]"
                width={408}
                height={430}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-5xl">{product.title}</h2>
              <h3 className="text-xl my-3">Price: ${product.price}</h3>
              <h3 className="font-bold bg-[#e6c93d] p-1">
                Tags: <span className="bg-[#e6c93d] p-1">{product.tags.join(", ")}</span>
              </h3>
              <p>
                <span className="font-bold">Discount: </span>
                {product.discountPercentage}%
              </p>
              <p className="font-bold">{product.isNew ? "New!" : ""}</p>
              <div className="w-full max-w-[500px] flex-shrink-0">
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xl font-bold">Description</AccordionTrigger>
                    <AccordionContent>
                      <div className="max-h-[200px] overflow-auto">
                        <p>{product.description}</p>
                        <p>{product.quantity}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-xl font-bold">Tags</AccordionTrigger>
                    <AccordionContent>
                      <div className="max-h-[200px] bg-[#e6c93d] p-1 overflow-auto">
                        {product.tags.join(", ")}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="space-x-5">
                  <Button onClick={() => AddToCart({ ...product, quantity: product.quantity ?? 1, image: product.productImage.asset.url  })} className="bg-[#e6c93d] mt-5 text-base md:rounded-sm px-16 md:px-9 rounded-lg py-8 md:py-6">
                    Add to Cart
                  </Button>
                  <Button className="text-[#e6c93d] bg-white border-[#e6c93d] border-[3px] mt-5 text-base md:rounded-sm px-16 md:px-5 rounded-lg py-8 md:py-6">
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
    </main>
  );
};

export default ProductList;
