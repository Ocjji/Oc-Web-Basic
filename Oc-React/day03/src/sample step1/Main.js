import React, { useState } from 'react';
import './style.scss';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Main = () => {
    const [data, setData] = useState({
        username: '',
        age: '',
        addr: '',
        tel: '',
        job: '',
        email: '',
        gender: '',
        hobby: ''
    });
    const [count, setCount] = useState(1);
    const { username, age, addr, tel, job, email, gender, hobby } = data;

    const changeInput = (e) => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const onNext = () => {
        setCount(count + 1);
    }
    const onPrev = () => {
        setCount(count - 1);
    }

    return (
        <div className='wrap'>
            {count === 1 &&
                <Step1 username={username} age={age} addr={addr} tel={tel} changeInput={changeInput} onNext={onNext} />
            }
            {count === 2 &&
                <Step2 job={job} email={email} gender={gender} hobby={hobby} changeInput={changeInput} onNext={onNext} onPrev={onPrev} />
            }
            {count === 3 &&
                <Step3 username={username} age={age} addr={addr} tel={tel} job={job} email={email} gender={gender} hobby={hobby} onNext={onNext} onPrev={onPrev} />
            }
            {count === 4 &&
                <Step4 username={username} />
            }
        </div>
    );
};

export default Main;