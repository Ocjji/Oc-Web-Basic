import React from 'react';
import ItemUser from "./ItemUser";

const ListUser = ({ data, onDel }) => {
    return (
        <div>
            <h2 className="users">고객 리스트</h2>
            <table>
                <colgroup>
                    <col className="w1" />
                    <col className="w2" />
                    <col className="w3" />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => <ItemUser key={item.id} item={item} onDel={onDel} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListUser;