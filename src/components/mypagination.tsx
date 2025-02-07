import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"
export default function ShopPagination(){
return(
    <main><Pagination >
    <PaginationContent className="border-[2px]  mb-9 border-[#a3a8aa]  rounded-md" >
      <PaginationItem>
        <PaginationLink href="#" className="text-[#6d767b] hover:text-[#e6c93d] p-7 border-[#a3a8aa]">First</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-[#e6c93d] hover:text-[#6d767b]  h-14 text-xl px-5 border-l-[2px] border-r-[2px] border-[#a3a8aa]">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-[#e6c93d] hover:text-[#6d767b]  h-14  text-xl  px-5 border-[#a3a8aa]  ">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" className="text-[#e6c93d] hover:text-[#6d767b]  text-xl  px-5 h-14 border-l-[2px] border-r-[2px]    border-[#a3a8aa]">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
      <PaginationLink href="#" className="text-[#6d767b] hover:text-[#e6c93d] p-7  border-[#a3a8aa]">Next</PaginationLink>
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  </main>
)
}  