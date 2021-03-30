import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceAction, priceSelector, TPriceItem } from '../../store/price';
import { List, Input, Divider } from 'antd';
import { FetchingStateTypes } from '../../store';
import { ToolOutlined, SearchOutlined } from '@ant-design/icons';
import { EmptyBox } from '../EmptyBox';

export const PriceList = () => {
  const { data, fetchingState } = useSelector(priceSelector);
  const dispatch = useDispatch();
  const [prices, setPrices] = useState<TPriceItem[]>([]);

  useEffect(() => {
    if (fetchingState === FetchingStateTypes.none) {
      dispatch(priceAction.list());
    }
  }, [dispatch, fetchingState]);

  useEffect(() => {
    setPrices(data);
  }, [data]);

  function handlerSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const val = event.target.value.trim();

    if (!val.length) {
      setPrices(data);
      return;
    }

    const filtered = data.filter((item) => RegExp(val, 'i').test(item.name));
    setPrices(filtered);
  }

  return (
    <>
      <Input
        placeholder="Поиск по услугам"
        prefix={<SearchOutlined />}
        size="large"
        onChange={handlerSearch}
        allowClear
        bordered={false}
      />
      <Divider />
      <EmptyBox text="Услуга не найдена">
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 4,
          }}
          dataSource={prices}
          loading={fetchingState === FetchingStateTypes.loading}
          renderItem={(price) => (
            <List.Item>
              <List.Item.Meta
                avatar={<ToolOutlined />}
                title={price.name}
                description={`${price.price} руб.`}
              />
            </List.Item>
          )}
        />
      </EmptyBox>
    </>
  );
};
