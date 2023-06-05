; (() => {
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    // 기본경로
    const $mainbook = get('.main-book');
    const $title = get('#title');
    const $author = get('#author');
    const $bookcode = get('#bookcode');
    const $tbody = get('.book-tbody');
    const $form = get('form');
    let data = [];

    //클래스 
    class Book {
        constructor(title, author, bookcode) {
            this.title = title
            this.author = author
            this.bookcode = bookcode
        }
    }



    class BookUI {
        //추가
        static add(item) {
            const { title, author, bookcode } = item;
            if (!title || !author || !bookcode) return

            const tr = document.createElement('tr');
            tr.innerHTML = `
                    <td>${title}</td>
                    <td>${author}</td>
                    <td>${bookcode} </td>
                    <td><button class="delete">X</button></td>
            `;
            $tbody.append(tr);
            BookUI.reset()
        }

        //삭제
        static del(target) {
            if (target.classList.contains('delete')) {
                target.parentElement.parentElement.remove();
                BookUI.showMessage('북리스트에 정상삭제완료', 'on');
            }
        }

        //메세지
        static showMessage(msg, calssName) {
            const div = document.createElement('div')
            div.textContent = msg
            div.className = `show ${calssName}`
            $mainbook.append(div)

            //2초후 삭제 
            setTimeout(() => {
                document.querySelector('.show').remove();
            }, 1000)
        }


        //텍스트지우기
        static reset() {
            $title.value = ''
            $author.value = ''
            $bookcode.value = ''
            $title.focus()
        }
    }

    // LocalStorage class 만들기
    class LocalData {
        static getData() {
            data = JSON.parse(localStorage.getItem("data")) || [];
            return data;
        }

        static addData(book) {
            let data = LocalData.getData();
            // data에 추가
            data = [...data, book];
            localStorage.setItem("data", JSON.stringify(data));
        }
        static removeData(bookcode) {
            let data = LocalData.getData();
            // data에서 삭제
            data = data.filter(item => item.bookcode !== bookcode);
            localStorage.setItem("data", JSON.stringify(data));
        }

        static showData() {
            let data = LocalData.getData();
            // localStorage.clear();
            data.map(item => {
                BookUI.add(item);
            })
        }
    }


    // 화면에 출력
    LocalData.showData()

    $form.addEventListener('submit', e => {
        e.preventDefault();

        const title = $title.value
        const author = $author.value
        const bookcode = $bookcode.value

        if (!title || !author || !bookcode) {
            BookUI.showMessage('값을 넣으세요', 'off')
        } else {
            const book = new Book(title, author, bookcode)
            BookUI.add(book)
            BookUI.reset()
            BookUI.showMessage('북리스트에 추가완료', 'on')
            LocalData.addData(book);
        }
    })

    $tbody.addEventListener('click', e => {
        BookUI.del(e.target)
        // bookUI.showMessage('북리스트에 정상삭제완료' , 'on') 
        let bookcode = e.target.parentElement.previousElementSibling.textContent.trim();
        LocalData.removeData(bookcode);
    })

})();