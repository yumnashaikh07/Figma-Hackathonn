import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
export default function ShopPagination(){
return(
    <main><Pagination >
    <PaginationContent className="border-[2px] mb-9 border-[#a3a8aa]  rounded-md" >
      <PaginationItem>
        <PaginationLink href="#" className="text-[#6d767b] p-7 border-[#a3a8aa] bg-slate-100">First</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-[#23A6F0] h-14 px-5 border-l-[2px] border-r-[2px] border-[#a3a8aa]">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-white h-14   px-5 border-[#a3a8aa]  bg-[#23A6F0] ">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-[#23A6F0]   px-5 h-14 border-l-[2px] border-r-[2px]    border-[#a3a8aa]">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink href="#" className="text-[#23A6F0] p-7  border-[#a3a8aa]">Next</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  </main>
)
}  