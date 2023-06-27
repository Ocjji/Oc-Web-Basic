import { Outlet } from "react-router-dom";

const CeoLayout = () => {
    return (
        <div style={{ background: 'yellow', padding: 20 }}>
            <h2> 항상 보이는 구역 </h2>
            {/* 화면에 들어올 영역 */}

            <Outlet />
        </div>
    );
};

export default CeoLayout;