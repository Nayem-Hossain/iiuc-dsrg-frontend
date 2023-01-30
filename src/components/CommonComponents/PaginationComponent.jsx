import React from 'react';

const PaginationComponent = ({membersPerPage,totalMembers,changePageNumber,currentPage}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalMembers/membersPerPage);i++)
    pageNumbers.push(i)
  return(
      <nav>
          <ul className='pagination'>
          {
              pageNumbers.map((number)=>{
                  return (
                      <li onClick={()=>{changePageNumber(number)}} key={number} className='page-item'>
                          <a style={{backgroundColor:currentPage===number?'#000000':'#ffffff',
                           cursor:'pointer',color:currentPage===number?'#ffffff':'#0d6efd'}}  className='page-link'>
                          {number}
                          </a>
                      </li>
                  )
              })
          }
          </ul>
      </nav>
  )
};

export default PaginationComponent;