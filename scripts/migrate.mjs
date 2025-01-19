// // migrate.mjs
// import fetch from 'node-fetch';
// import { createClient } from '@sanity/client';

// // Sanity client setup
// const sanityClient = createClient({
//   projectId: "1qriwdda",
//   dataset: "production",
//   useCdn: false,
//   apiVersion: '2023-01-01',
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// });

// async function fetchDataFromAPI() {
//   try {
//     // Fetch data from external API
//     const response = await create("https://template6-six.vercel.app/api/products");
//     const products = await response.json();

//     // Migrate data to Sanity
//     for (const product of products) {
//       await sanityClient.createOrReplace({
//         _id: `product-${product.id}`, // Unique ID for each product
//         _type: 'product',
//         title: product.title,
//         description: product.description,
//         price: product.price,
//         image: {
//           _type: 'image',
//           asset: {
//             _ref: `image-${product.imageId}-asset`, // Replace with your image handling logic
//           },
//         },
//       });
//       console.log(`Migrated product: ${product.title}`);
//     }

//     console.log('Migration completed!');
//   } catch (error) {
//     console.error('Error migrating data:', error);
//   }
// }

// fetchDataFromAPI();
// import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: "1qriwdda",
//   dataset: 'production',
//   useCdn: false,
//   apiVersion: '2025-01-13',
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       const document = {
//         _type: 'product',
//         title: product.title,
//         price: product.price,
//         productImage: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         tags: product.tags,
//         discountPercentage: product.discountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
//         description: product.description,
//         isNew: product.isNew,
//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.title} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// async function importProducts() {
//   try {
//     const response = await fetch('https://template6-six.vercel.app/api/products');
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const products = await response.json();

//     for (const product of products) {
//       await uploadProduct(product);
//     }
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }

// importProducts();





// TEMPLATE 03
import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: '2021-08-31'
});


async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'product',
        title: product.title,
        price: product.price,
        productImage: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        tags: product.tags,
        dicountPercentage: product.discountPercentage, // Typo in field name: dicountPercentage -> discountPercentage
        description: product.description,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.title} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}


async function importProducts() {
  try {
    const response = await fetch('https://template6-six.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
importProducts();


// async function importData() {
//   try {
//     console.log('migrating data please wait...');

//     // API endpoint containing car data
//     const response = await axios.get('https://template-03-api.vercel.app/api/products');
//     const products = response.data.data;
//     console.log("products ==>> ", products);


//     for (const product of products) {
//       let imageRef = null;
//       if (product.image) {
//         imageRef = await uploadImageToSanity(product.image);
//       }

//       const sanityProduct = {
//         _type: 'product',
//         productName: product.productName,
//         category: product.category,
//         price: product.price,
//         inventory: product.inventory,
//         colors: product.colors || [], // Optional, as per your schema
//         status: product.status,
//         description: product.description,
//         image: imageRef ? {
//           _type: 'image',
//           asset: {
//             _type: 'reference',
//             _ref: imageRef,
//           },
//         } : undefined,
//       };

//       await client.create(sanityProduct);
//     }

//     console.log('Data migrated successfully!');
//   } catch (error) {
//     console.error('Error in migrating data ==>> ', error);
//   }
// }

