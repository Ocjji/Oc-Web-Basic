import React, { useRef, useState } from 'react';
import './main.scss';
import BookForm from "./BookForm";
import BookList from "./BookList";

const dataList = [
    { id: 1, title: "리액트", author: "선생님", bookcode: "00001" }//
];

const Book = () => {
    const [data, setData] = useState(dataList);

    const [isEdit, setIsEdit] = useState(false);
    const no = useRef(2);
    const textRef = useRef(null);

    const [book, setBook] = useState(
        { title: "", author: "", bookcode: "" }
    );

    const changeInput = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            // 수정
            setData(data.map(item => item.id === book.id ? book : item));

            setBook({
                title: "", author: "", bookcode: ""
            })
            textRef.current.focus();
            setIsEdit(false);

        } else {
            // 추가
            book.id = no.current++;
            setData([
                ...data,
                book
            ]);
            setBook({ title: "", author: "", bookcode: "" })
            textRef.current.focus();
        }
    };

    // 삭제 버튼 클릭 
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    // 수정 버튼 클릭
    const onEdit = (item) => {
        setIsEdit(true);
        const { title, author, bookcode } = item;
        setBook({
            ...item,
            title: title, author: author, bookcode: bookcode
        })
    }

    return (
        <div className="wrap">
            <div className="main-book">
                <h2>북카페 도서 관리 시스템</h2>
                <div className="inner">
                    <BookForm onSubmit={onSubmit} book={book} changeInput={changeInput} isEdit={isEdit} textRef={textRef} />
                    <BookList data={data} onDel={onDel} onEdit={onEdit} />
                </div>
            </div>
        </div>
    );
};

export default Book;