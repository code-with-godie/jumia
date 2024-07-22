import { FormControl, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSearchParams } from 'react-router-dom';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSelector } from 'react-redux';

const Container = styled.div`
  flex: 1;
  max-width: 300px;
  position: sticky;
  background-color: white;
  top: 0;
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Item = styled.div`
  padding: 0.5rem;
  border-bottom: 1px solid #f1f1f2;
`;
const ItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 400;
`;
const ItemWrapper = styled.div``;
const CategoryFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(null);
  const [query, setQuery] = useState({ categories: [], brands: [] });
  const [loading, setLoading] = useState();
  const { currentUser: user } = useSelector(state => state.user);
  const getFilters = async () => {
    try {
      setLoading(true);
      const filters = await appwriteService.getFilters(
        searchParams.get('category'),
        user?.email
      );
      setFilters(filters);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handlePercentage = e => {
    let value = e.target.value;
    setQuery(prev => ({ ...prev, percent: value }));
  };
  const handleBrand = async e => {
    let value = e.target.name;
    value = query?.brands?.includes(value)
      ? query.brands.filter(item => item !== value)
      : [...query.brands, value];

    setQuery(prev => ({ ...prev, brands: value }));
    const products = await appwriteService.getFilteredProducts({
      categories: value,
    });
    console.log(products);
  };
  const handlePrice = e => {
    let value = e.target.value;
    setQuery(prev => ({ ...prev, price: value }));
  };
  const handleCategory = e => {
    let value = e.target.name;
    value = query?.categories?.includes(value)
      ? query.categories.filter(item => item !== value)
      : [...query.categories, value];

    setQuery(prev => ({ ...prev, categories: value }));
  };

  useEffect(() => {
    getFilters();
  }, [searchParams]);
  useEffect(() => {
    console.log(query);
  }, [query]);
  if (loading) return <p>loading </p>;
  return (
    <Container>
      <Item>
        <ItemTitle>Category</ItemTitle>
        <FormGroup>
          {filters?.categories?.map((item, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={query.categories.includes(item)}
                  name={item}
                  onChange={handleCategory}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
      </Item>
      <Item>
        <ItemTitle>Price (Kshs.) </ItemTitle>
        <ItemWrapper>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='price'
            />
          </FormGroup>
        </ItemWrapper>
      </Item>
      <Item>
        <ItemTitle>Brand</ItemTitle>
        <ItemWrapper>
          <FormGroup>
            {filters?.brand?.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    name={item}
                    onChange={handleBrand}
                    checked={query.brands.includes(item)}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </ItemWrapper>
      </Item>
      <Item>
        <ItemTitle>Discount percentage</ItemTitle>
        <FormControl>
          <RadioGroup
            // value={filters.percent}
            // onChange={handlePercentage}
            name='percent'
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='Male'
            />
            <FormControlLabel
              value='other'
              control={<Radio />}
              label='Other'
            />
          </RadioGroup>
        </FormControl>
      </Item>
    </Container>
  );
};

export default CategoryFilters;
