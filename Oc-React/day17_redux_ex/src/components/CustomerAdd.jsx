import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../store/modules/customerSlice";


const CustomerAdd = () => {
    const [user, setUser] = useState({ id: null, author: "", title: "", content: "", date: "" });
    const { author, title, content } = user;
    const changeInput = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit = e => {
        e.preventDefault();
        if (!title || !author || !content) {
            alert("빈 칸 없이 작성해주세요");
            return
        }
        dispatch(add(user));
        navigate("/customer");
    }
    return (
        <>
            <div className="inner">
                <h2> 고객문의 </h2>
                <form className="customer-add" onSubmit={(e) => onSubmit(e)}>
                    <p>  <input type="text" placeholder="제목" name="title" value={title} onChange={(e) => changeInput(e)} /></p>
                    <p>  <input type="text" placeholder="작성자" name="author" value={author} onChange={(e) => changeInput(e)} /></p>
                    <p>
                        <textarea cols="100" rows="10"
                            placeholder="문의하기" name="content" value={content}
                            onChange={(e) => changeInput(e)}></textarea></p>
                    <p className="customer-btn">
                        <button onClick={() => navigate("/customer")}>목록으로</button>
                        <button type="submit">저장하기</button>
                        <button onClick={() => navigate("/customer")}>취소하기</button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default CustomerAdd;