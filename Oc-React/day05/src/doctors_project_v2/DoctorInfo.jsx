import React, { useState } from 'react';
import './DoctorInfo.scss';
import DrInfoMenuList from "./DrInfoMenuList";
import DrProfile from "./DrProfile";
import DrPeople from "./DrPeople";

const DoctorInfo = ({ drinfomenulist, onSelectInfo, selected_Dr }) => {
    const { people } = selected_Dr;
    const [peopleView, setPeople] = useState(people);
    const onPerson = (peoID) => {
        setPeople(people.map(item => item.peoID === peoID ? { ...item, isView: true } : { ...item, isView: false }));
    }
    return (
        <div className="dr-info">
            <DrInfoMenuList drinfomenulist={drinfomenulist} onSelectInfo={onSelectInfo} />
            {
                drinfomenulist[0].isShow && <DrProfile selected_Dr={selected_Dr} />
            }
            {
                drinfomenulist[1].isShow && <DrPeople peopleView={peopleView} onPerson={onPerson} />
            }
            {/* {
                drinfomenulist[2].isShow && <DrProfile selected_Dr={selected_Dr} />
            } */}
        </div>
    );
};

export default DoctorInfo;