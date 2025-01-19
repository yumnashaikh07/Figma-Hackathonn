
"use client"
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';


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
  }

  const ProductList = ({ params }: { params: { slug: string } }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isWishlisted, setIsWishlisted] = useState(false);
    useEffect(() => {
      async function fetchProducts() {
        try {
          const query = `*[_type == "product"  && slug.current == "${params.slug}"]{
            productImage  {
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
          "slug": slug.current
          }`
  
          const data = await client.fetch(query, { slug: params.slug } );
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
  
      fetchProducts();
    }, [params.slug]);
    if (!products) return <div>Loading...</div>;
  
    return (
     <section> 
          {products.map(product => (
            <div key={product.slug} >
                <div className=" p-20 mr-28 space-x-5 grid grid-cols-1 md:flex md:justify-between">
              <Image
                src={product.productImage.asset.url}
                alt={product.title}
                className="product-image"
                width={408}
                height={430}
                
              />
              <div>
              <h2 className='font-bold text-5xl '>{product.title}</h2><h3 className='text-xl my-3'>Price: ${product.price}</h3>
              <h3><span className='font-bold'>Tags: </span> {product.tags.join(', ')}</h3>
              <p><span className='font-bold'>Discount: </span>{product.discountPercentage}%</p>
              <p className='font-bold'>{product.isNew ? "New!" : ""}</p>
              <Accordion type="single" collapsible  >
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-xl font-bold'>Description</AccordionTrigger>
    <AccordionContent>
    <p className='p-11'>{product.description}</p>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<div className='space-x-5'>
<Button className="bg-[#e6c93d] mt-5 text-base md:rounded-sm px-16 md:px-9 rounded-lg py-8 md:py-6">Add to Cart</Button>
<Button className="text-[#e6c93d]  bg-white border-[#e6c93d] border-[3px] mt-5 text-base md:rounded-sm px-16 md:px-5 rounded-lg py-8 md:py-6">Add to Wishlist</Button></div>

  
              </div>
              </div>
            </div>
          ))}
      </section>
  );
};
export default(ProductList)

// "use client"
// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import Image from 'next/image';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Button } from '@/components/ui/button';

// interface Product {
//     productImage: {
//       asset: {
//         url: string;
//       };
//     };
//     description: string;
//     title: string;
//     price: number;
//     tags: string[];
//     discountPercentage: number;
//     isNew: boolean;
//     slug: string;
//     wishlist: { _ref: string }[];  // Assuming wishlist is an array of references to products
//   }

// const ProductList = ({ params }: { params: { slug: string } }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const query = `*[_type == "product" && slug.current == "${params.slug}"]{
//           productImage  {
//             asset -> {
//               asset,
//               url
//             }
//           },
//           description,
//           title,
//           price,
//           tags,
//           discountPercentage,
//           isNew,
//           "slug": slug.current,
//           wishlist[]->{_ref, slug}   // Fetch wishlist references from Sanity
//         }`;

//         const data = await client.fetch(query, { slug: params.slug });
//         setProducts(data);
        
//         // Check if the current user has the product in their wishlist
//         // This assumes you have a way to fetch user-related data and wishlist.
//         // Here we're assuming you have a `userId` or similar identifier.
//         const userWishlist = await client.fetch(`*[_type == "wishlist" && user._ref == $userId]`, { userId: 'USER_ID' });
//         const productInWishlist = userWishlist.some((item: { _ref: string }) => item._ref === data[0]?.slug);
//         setIsWishlisted(productInWishlist);
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     }

//     fetchProducts();
//   }, [params.slug]);

//   const handleAddToWishlist = async (slug: string) => {
//     try {
//       const wishlistId = `wishlist_${slug}`;  // Create a unique ID for wishlist items based on slug

//       if (!isWishlisted) {
//         // Add to wishlist
//         await client.create({
//           _type: 'wishlist',
//           user: { _ref: 'USER_ID' },  // Assuming `USER_ID` is the logged-in user ID
//           product: { _ref: slug }
//         });
//         setIsWishlisted(true);
//       } else {
//         // Remove from wishlist
//         const wishlistItem = await client.getDocument(wishlistId);
//         if (wishlistItem) {
//           await client.delete(wishlistItem._id);
//         }
//         setIsWishlisted(false);
//       }
//     } catch (error) {
//       console.error('Error managing wishlist:', error);
//     }
//   };

//   if (!products) return <div>Loading...</div>;

//   return (
//     <section>
//       {products.map(product => (
//         <div key={product.slug}>
//           <div className="p-20 mr-28 space-x-5 grid grid-cols-1 md:flex md:justify-between">
//             <Image
//               src={product.productImage.asset.url}
//               alt={product.title}
//               className="product-image"
//               width={408}
//               height={430}
//             />
//             <div>
//               <h2 className='font-bold text-5xl'>{product.title}</h2>
//               <h3 className='text-xl my-3'>Price: ${product.price}</h3>
//               <h3><span className='font-bold'>Tags: </span> {product.tags.join(', ')}</h3>
//               <p><span className='font-bold'>Discount: </span>{product.discountPercentage}%</p>
//               <p className='font-bold text-[#e6c93d]'>{product.isNew ? "New!" : ""}</p>
//               <Accordion type="single" collapsible>
//                 <AccordionItem value="item-1">
//                   <AccordionTrigger className='text-xl font-bold'>Description</AccordionTrigger>
//                   <AccordionContent>
//                     <p className='p-11'>{product.description}</p>
//                   </AccordionContent>
//                 </AccordionItem>
//               </Accordion>
//               <div className='space-x-5'>
//                 <Button className="bg-[#e6c93d] mt-5 text-base md:rounded-sm px-16 md:px-9 rounded-lg py-8 md:py-6">Add to Cart</Button>
//                 <Button 
//                   className={`text-[#e6c93d] ${isWishlisted ? 'bg-red-500' : 'bg-white'} border-[#e6c93d] border-[1px] mt-5 text-base md:rounded-sm px-16 md:px-5 rounded-lg py-8 md:py-6`} 
//                   onClick={() => handleAddToWishlist(product.slug)}
//                 >
//                   {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ProductList;
