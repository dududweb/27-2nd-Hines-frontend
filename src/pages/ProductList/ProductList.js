import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { API } from '../../config';
import Product from './Product/Product';
import CategoryAside from './CategoryAside/CategoryAsie';

function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();

  const { productInfo } = useAxios(API.PRODUCTS + location.search);
  const { categoriesData } = useAxios(API.CATEGORIES + location.search);

  const goMainCategories = clickedCategory => {
    const category_id = clickedCategory;
    const queryString = `?category_id=${category_id}`;
    navigate(`${queryString}`);
  };

  const goSubCategories = clickedCategory => {
    const sub_category_id = clickedCategory;
    const queryString = `?sub_category_id=${sub_category_id}`;
    navigate(`${queryString}`);
  };

  return (
    <Main>
      <CategoryBox>
        <CategoryAside
          goMainCategories={goMainCategories}
          goSubCategories={goSubCategories}
          categoriesData={categoriesData}
        />
      </CategoryBox>
      <ProductBox>
        <ProductWrap>
          {productInfo &&
            productInfo.map(items => {
              return <Product items={items} key={items.id} />;
            })}
        </ProductWrap>
      </ProductBox>
    </Main>
  );
}

const Main = styled.main`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 1050px;
  margin: 50px auto;
`;

const CategoryBox = styled.aside`
  width: 150px;
`;

const ProductBox = styled.div`
  width: 800px;
`;

const ProductWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 100%;
  flex-wrap: wrap;
`;

export default ProductList;
