import Test10Thead from './Test10Thead';
import Test10Tbody from './Test10Tbody';
import Test10Info from './Test10Info';
import './Test10.scss';

const Test10 = () => {

    return (
        <div>
            <table>
                <Test10Info />
                <Test10Thead />
                <Test10Tbody />
            </table>
        </div>
    );
};

export default Test10;