/* eslint-disable react/prop-types */
import React from 'react'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
const Pagination = props => {
  return (
    <StyledPaginateContainer>
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel='...'
        previousClassName='itempage'
        nextClassName='item'
        breakClassName='item'
        pageCount={props.totalPages}
        onPageChange={props.method}
        containerClassName='pagination'
        activeClassName='active'
        pageClassName='item'
        marginPagesDisplayed='2'
      />
    </StyledPaginateContainer>
  )
}

const StyledPaginateContainer = styled.div`
  .pagination {
    color: red;
    display: flex;
    flex-direction: row;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: white;
    color: red;
  }
  .item {
    margin-left: 15px;
    list-style: none;
    cursor: pointer;
  }
  .itempage {
    list-style: none;
    cursor: pointer;
  }
`
export default Pagination
