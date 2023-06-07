import React from 'react';

const Test3 = () => {
    const imgURL = "";
    const name = "이미지1";
    const desc = "사진1 입니다";

    // style = {}
    const styles = {
        wrap: {
            margin: 20,
            padding: 20,
            display: 'flex',
            border: "1px solid #000",
            borderRadius: 50
        },
        imgBox: {
            padding: 5,
            height: 100,
            borderRadius: "50%"
        },
        conBox: {
            maginLeft: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    }
    return (
        <div style={styles.wrap}>
            <div
            // 한줄 주석
            /* 
                여러줄 주석
                태그 안에 설명 가능
            */
            >
                <img src="./assets/images/img0.jpg" alt="" style={styles.imgBox} />
            </div>
            <div style={styles.conBox}>
                <span>{name}</span>
                <span>{desc}</span>

                {/* // 설명 */}
            </div>
        </div>
    );
};

export default Test3;