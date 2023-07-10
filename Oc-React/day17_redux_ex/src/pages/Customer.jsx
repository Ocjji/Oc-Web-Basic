 
import CustomerLIst from '../components/CustomerLIst';
import './Customer.css'
 
const Customer = () => {
 
 
    return (
        <>
            <div className="inner">
                <h2> 고객문의 </h2>
                 <CustomerLIst />
            </div>
        </>
    );
};

export default Customer;