import { useParams } from 'react-router-dom';
import Items from "./Items";

const ItemPage = () => {
    const getItem = (id) => Items.find( (item) => item.id === id );
    const { id } = useParams();
    const item = getItem(id);
    console.log(item);

    return (
        <div>Item page!</div>
    )
}

export default ItemPage;