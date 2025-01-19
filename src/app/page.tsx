import Herobanner from "@/components/herobanner";
import Header from "@/components/header";
import Herosection from "@/components/herosection";
export default function Home() {
  return (
    <main >
      
<div className="bg-slate-900">
<Herobanner/>
</div>
<Header/>
<Herosection/>

      </main>

  );
}

// DATA FETCH FROM API TO WEBSITE
// "use client"
// import React, { useEffect, useState } from "react";

// const HomePage = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://template6-six.vercel.app/api/products");
//       const result = await response.json();
//       setData(result);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };


