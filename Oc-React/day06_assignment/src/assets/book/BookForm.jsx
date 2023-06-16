import React from 'react';

const BookForm = ({ onSubmit, book, changeInput, isEdit, textRef }) => {
    const { title, author, bookcode } = book;
    return (
        <div className="book-input">
            <form className="book-form" onSubmit={onSubmit}>
                <p>
                    <label>제목</label>
                    <input type="text"
                        name="title"
                        placeholder="제목 입력 (원미동 사람들)"
                        value={title} onChange={changeInput} ref={textRef}
                    />
                </p>
                <p>
                    <label>저자</label>
                    <input
                        type="text"
                        name="author"
                        placeholder="저자 입력 (임수정)"
                        value={author} onChange={changeInput}
                    />
                </p>
                <p>
                    <label>책 코드</label>
                    <input
                        type="text"
                        name="bookcode"
                        placeholder="책 코드 입력 (00001)"
                        value={bookcode} onChange={changeInput}
                    />
                </p>

                <p>
                    {isEdit ? <button className="btn" type="submit">수정</button> : <button className="btn" type="submit">등록</button>}
                </p>
            </form>
        </div >
    );
};

export default BookForm;