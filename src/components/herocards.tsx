import Image from "next/image"
interface CardsType{
    image:string,
    title:string,
    description:string,
    price : number,
    pricenow: number,
    colors: string[],
}
const Cards: CardsType[] =[
    {
        image:"/herocard011.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
        image:"/herocard022.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    }
    ,
    {
        image:"/herocard033.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
        image:"/herocard044.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    //SECTION OF CARDS START HERE
    {
        image:"/herocard055.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
        image:"/herocard066.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
        image:"/herocard077.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    },
    {
        image:"/herocard088.png",
        title:"Graphic Design",
        description:"English Department",
        price : 16.48 ,
        pricenow:6.48,
        colors:["#23A6F0", "#23856D", "#E77C40", "#252B42"]
    }
]
export default function HeroCards (){
 return(
    <main className="grid grid-cols-1 md:grid-cols-4  md:space-y-0 space-y-5 space-x-0 md:space-x-5 text-center p-24 ">
        {Cards.map((card, index) =>(
            <div key={index} className="flex flex-col  items-center">
                <Image src={card.image} alt="hero card" width={240} height={427}/>
                
                <h2 className="text-gray-900 font-bold my-3">{card.title}</h2>
                <p className="text-gray-400 font-bold mb-3">{card.description}</p>

                    <p className="text-gray-400  font-bold">${card.price}<span  className="text-[#23856D] font-bold">${card.pricenow}</span></p>
                    
                    <div className="flex space-x-[3px] md:mb-20 ">{card.colors.map((color, index) =>(
                        <div key={index} className="w-5 h-5 rounded-full " style={{backgroundColor:color}}></div>
                    ))}</div>
                </div>
        ))}
    </main>
 )
}

