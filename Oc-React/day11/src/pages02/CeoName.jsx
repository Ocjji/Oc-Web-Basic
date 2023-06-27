 
import { useNavigate, useParams } from 'react-router-dom';
import data from './data'
 
const CeoName = () => {
    let { name } = useParams();
    const navigate  = useNavigate()

    return (
        <div>
               {
                data.filter( item => item.title === name )
                .map( (item, index) => <div key={index}>
                    <h3>{item.title}</h3>
                    <h3>{item.info}</h3>
                </div>)
               }

               <button onClick={() => navigate('/ceo')}>뒤로</button>
        </div>
    );
};

export default CeoName;