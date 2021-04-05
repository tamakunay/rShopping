import { Button } from '@material-ui/core';

// Types
import { CartItemType } from '../../types/Cart'

// styles
import { Wrapper } from './CartItem.styles'

type CartItemProps = {
    item: CartItemType
    addToCart: (clickedItem: CartItemType) => void
    removeFromCart: (id: number) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, addToCart, removeFromCart }) => {
    return (
        <Wrapper>
            <div>
                <h3>{item.title}</h3>
                <div className="info">
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className="btn">
                    <Button
                        size="small"
                        variant="contained"
                        disableElevation
                        onClick={() => removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        size="small"
                        variant="contained"
                        disableElevation
                        onClick={() => addToCart(item)}
                    >
                        +
                </Button>
                </div>
            </div>
            <img src={item.image} alt={item.title} />
        </Wrapper>
    )
}


export default CartItem