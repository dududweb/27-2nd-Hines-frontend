import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import OrderInfo from './OrderInfo';
import OrderClientInfo from './OrderClientInfo';
import { API } from '../../config';
import useAxios from '../../hooks/useAxios';

function Orderlist() {
  const { orderInfo } = useAxios(API.ORDERS);

  return (
    <OrderlistWrap>
      {orderInfo.map(info => {
        return (
          <Fragment key={info.id}>
            <OrderInfo items={info} />
            <OrderClientInfo items={info} />
          </Fragment>
        );
      })}
    </OrderlistWrap>
  );
}

const OrderlistWrap = styled.main`
  width: 1050px;
  margin: 50px auto;
  font-size: ${({ theme }) => theme.fontRegular};
`;

export default Orderlist;
