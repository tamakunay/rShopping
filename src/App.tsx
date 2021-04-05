import { CircularProgress } from '@material-ui/core';
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Badge, Drawer, Grid } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { Wrapper, StyledButton } from './App.styles'
import Item from './components/Item/Item'
import Cart from './components/Cart/Cart'

import { CartItemType } from './types/Cart'


const getproducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getproducts)

  // get total items from
  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((ack: number, item) => ack + item.amount, 0)
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)
      if (isItemInCart) {
        return prev.map(item => (item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item))
      }

      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = () => {

  }

  if (isLoading) return <CircularProgress />
  if (error) return <div>something went wrong</div>


  return (
    <Wrapper>
      <Drawer anchor='right' open={cartIsOpen} onClose={() => setCartIsOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>

      <StyledButton onClick={() => setCartIsOpen(true)}>
        {/* badgeContent={getTotalItems(cartItems)} */}
        <Badge color='error' >
          <AddShoppingCart />
        </Badge>
      </StyledButton>

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
