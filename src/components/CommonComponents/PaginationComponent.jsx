import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = () => {
    return (
        <Pagination className='p-2'>
            <Pagination.First>{"First"}</Pagination.First >
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last>{"Last"}</Pagination.Last >
        </Pagination>
    );
};

export default PaginationComponent;