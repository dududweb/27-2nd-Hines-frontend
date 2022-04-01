import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import Product from '../ProductList/Product/Product';
import ProductListBanner from '../ProductList/ProductListBanner';
import MostProductCard from '../ProductList/Product/MostProductCard';
import { API } from '../../config';

function ProductList() {
  // const [productInfo, setProductInfo] = useState([]);
  const location = useLocation();
  const url = API.PRODUCTS;
  const { productInfo, loading, error } = useAxios(url + location.search);

  return (
    <>
      <ProductListBanner />
      <Main>
        <TodayDisplay />
        <TitleWrap>
          <MainTitle>오늘의 딜</MainTitle>
          <MoreText>More</MoreText>
        </TitleWrap>
        <ProductWrap>
          {productInfo &&
            productInfo.map(items => {
              return <Product items={items} key={items.id} />;
            })}
        </ProductWrap>
        <TitleWrap>
          <MainTitle>Top Rated</MainTitle>
          <MoreText>More</MoreText>
        </TitleWrap>
        <MostProductWrap>
          <MostProductCard />
        </MostProductWrap>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 1050px;
  margin: 0 auto;
`;

const TodayDisplay = styled.div`
  width: 100%;
`;

const TitleWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  font-weight: ${({ theme }) => theme.fontWeightBold};
  margin: 30px 0;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
`;

const MainTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontMedium};
`;

const MoreText = styled.h4`
  font-size: ${({ theme }) => theme.fontRegular};
`;

const ProductWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  width: 100%;
  flex-wrap: wrap;
`;

const MostProductWrap = styled.div`
  ${({ theme }) => theme.flexMixin('', '', 'space-between')};
  flex-wrap: wrap;
`;

export default ProductList;
