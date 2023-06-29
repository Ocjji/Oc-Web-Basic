import React from 'react';
import { InfoContainer } from "../Styled/InfoStyle";

const Info = () => {
    return (
        <InfoContainer className="info">
            <div id="container">
                <div className="inner">
                    <div className="item"><img src="/images/info/bg_info_1.png" alt="" /></div>
                    <div className="ir">
                        탐라는 전기차
                        전기차의 성지 제주도에서 전기차 렌트 시 필요한 모든 정보를 제공해 드립니다.

                        세계 자연유산으로 지정된 제주는
                        국내에서 가장 쉽고 편하게
                        전기차를 이용해볼 수 있는 것이죠.

                        하지만 막상 전기차를 렌트해서 이용하더라도
                        전기차만의 특성을 모르고 이용하거나 특별한 기능을 사용하지 못한다면
                        즐거운 여행 기간 동안 오히려 예상치 못한 어려움을 만날 수 있습니다.

                        전기차를 이용한 제주도 여행이 더 즐겁고 편안할 수 있도록
                        전기차의 기본 특성부터 운행 팁, 충전 방법, 사고시 대처 방법 등
                        전기차와 관련된 다양한 정보를 제공해드립니다.

                        ‘탐라는 전기차‘에서 준비한 꿀팁들로 전기차에 대해
                        간단하게 알아보며 더욱 더 즐거운 여행을 준비해볼까요?
                    </div>
                </div>
            </div>
        </InfoContainer>
    );
};

export default Info;