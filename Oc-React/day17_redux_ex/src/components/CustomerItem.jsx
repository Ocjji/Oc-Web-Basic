import { Link } from "react-router-dom";

const CustomerItem = ({ item }) => {
    const { id, title, content, date, author } = item;
    return (
        <tr>
            <td> {id} </td>
            <td><Link to={`/customer/${id}`}> {title} </Link></td>
            <td> {author}  </td>
            <td> {date} </td>
        </tr>
    );
};

export default CustomerItem;