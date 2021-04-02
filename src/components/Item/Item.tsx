
import { CartItemType } from '../../types/Cart'
import { Wrapper } from './Item.styles'



type ItemProp = {
    item: CartItemType,
    handleAddToCart: (selectedItem: CartItemType) => void
}

const Item: React.FC<ItemProp> = ({ item, handleAddToCart }) => (
    <Wrapper>
        {/* <Card>
            <CardMedia image={item.image} title={item.title} />
            <CardContent>
                <Typography component="h3">
                    {item.title}
                </Typography>
                <Typography component="p">
                    {item.description}
                </Typography>
                <Typography component="h3">
                    {item.price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
            </CardActions>
        </Card> */}

        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>

    </Wrapper>
)

export default Item