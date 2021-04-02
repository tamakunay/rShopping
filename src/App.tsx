import { CircularProgress } from '@material-ui/core';
import { useState } from 'react'
import { useQuery } from 'react-query'
// import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// import Badge from '@material-ui/icons/Badge';
import { Wrapper } from './App.styles'
import Item from './components/Item/Item'

import { CartItemType } from './types/Cart'


const getproducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getproducts)
  console.log(data)

  // get total items from
  const getTotalItems = () => null

  const handleAddToCart = (selectedItem: CartItemType) => null

  const handleRemoveFromCart = () => null

  if (isLoading) return <CircularProgress />
  if (error) return <div>something went wrong</div>


  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
