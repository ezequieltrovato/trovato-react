import { IoCartSharp } from "react-icons/io5";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
const CartWidget =() => {
    return(
        <>
            <IoCartSharp/>
            <Stack direction="horizontal" gap={2}>
            <Badge pill bg="dark">1
                </Badge>
                </Stack>
            </>   
    )
}

export default CartWidget