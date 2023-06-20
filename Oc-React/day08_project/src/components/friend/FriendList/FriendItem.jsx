
const FriendItem = ({item}) => {
    const { id , name , age , image } = item 

    return (
        <li>
           <p> <img src={item.image} alt="" /> </p> 
           <div> <strong>이름: {item.name} </strong>
                 <span>나이: {item.age} </span>
           </div>
        </li>
    );
};

export default FriendItem;