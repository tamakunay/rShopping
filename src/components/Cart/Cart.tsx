import CartItem from '../CartItem/CartItem'

// Types
import { CartItemType } from '../../types/Cart'

// styles
import { Wrapper } from './Cart.styles'

type CartProps = {
    cartItems: CartItemType[]
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}


const Cart: React.FC<CartProps> = ({
    cartItems,
    addToCart,
    removeFromCart,
}) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart</p> :
                cartItems.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                ))
            }

        </Wrapper>
    )
}

export default Cart