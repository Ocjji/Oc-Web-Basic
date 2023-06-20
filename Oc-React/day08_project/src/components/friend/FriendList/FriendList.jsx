
import FriendItem from './FriendItem';
import styles from './FriendList.module.css';


const FriendList = ({ data }) => {
    return (
        <ul className={styles.list}>
           {
               data.map( item => <FriendItem  key={ item.id }  item={item} /> )
           } 
        </ul>
    );
};

export default FriendList;