// import { NextApiRequest, NextApiResponse } from "next";
// interface ProductDetailListType{
//     title:string,
//     description:string,
//     image:string,
//     price:number,
//     slug:number,
//     quantity:number,
//     productid:number
// }
// const ProductDetailList =[
//     {
//         slug:'1',
//         title:'LAMP 1',
//         description:'',
//         image:'/lamp.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'2',
//         title:'LAMP 2',
//         description:'',
//         image:'lamp5.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'3',
//         title:'LAMP 3',
//         description:'lamp.6webp',
//         image:'',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'4',
//         title:'VASE 1',
//         description:'vase1.webp',
//         image:'',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'5',
//         title:'VASE 2',
//         description:'',
//         image:'/vase2.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'6',
//         title:'VASE 3',
//         description:'',
//         image:'/vase3.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },  
//     {
//         slug:'7',
//         title:'CUSHION 1',
//         description:'',
//         image:'/cushion1.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'8',
//         title:'CUSHION 2',
//         description:'/cushion2.webp',
//         image:'',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'9',
//         title:'CUSHION 3',
//         description:'/cushion3.webp',
//         image:'',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
//     {
//         slug:'10',
//         title:'LAMP 4',
//         description:'',
//         image:'/lamp.webp',
//         price:'',
//         quantity:'',
//         productid:''  
//     },
// ]
// export default function handler(req :NextApiRequest, res :NextApiResponse) {
//     const { slug } = req.query;

//   // If no slug is provided, return all products
//   if (!slug) {
//     return res.status(200).json( ProductDetailList);
//   }

//   // Find the product by slug
//   const product = ProductDetailList.find((p) => p.slug === slug);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   // Return the product matching the slug
//   res.status(200).json(product);
// }
import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";


export async function GET() {
  try {
    const data = await client.fetch(`*[_type=="product"]{
    _id,
    title,
    "imageUrl" :productImage.asset -> url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew
}`);

    return  NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return new NextResponse('Error fetching data', { status: 500 });
  }
}