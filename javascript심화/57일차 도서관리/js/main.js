; (() => {
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    const $add = get('.add');
    const $title = get('#title');
    const $author = get('#author');
    const $bookcode = get('#bookcode');
    const $tbody = get('.book-tbody');

    class AddBook {
        constructor(title = '', author = '', bookcode = '') {
            this.title = title;
            this.author = author;
            this.bookcode = bookcode;
        }
        init() {
            $add.addEventListener('click', e => {
                e.preventDefault();
                this.add();
            });
        }
        add() {
            this.title = $title.value;
            this.author = $author.value;
            this.bookcode = $bookcode.value;

            if (this.title !== '' && this.author !== '' && this.bookcode !== '') {
                $tbody.innerHTML += `
                <tr>
                    <td>${this.title}</td>
                    <td>${this.author}</td>
                    <td>${this.bookcode}</td>
                    <td><button class="delete">X</button></td>
                </tr>
            `;

                this.clear();
            } else {
                // alert('모든 내용을 입력해주세요.');
                this.focusTo();
            }

            let $delete = getAll('.delete');
            $delete.forEach(btn_del => {
                btn_del.addEventListener('click', e => {
                    this.del(e.target);
                })
            })


        }
        del(target) {
            target.parentElement.parentElement.remove();
        }
        clear() {
            $title.value = '';
            $author.value = '';
            $bookcode.value = '';
        }
        focusTo() {
            let arrValue = [$title.value, $author.value, $bookcode.value];
            let targets = [$title, $author, $bookcode];

            for (let i = 0; i < arrValue.length; i++) {
                if (arrValue[i] === '') {
                    targets[i].focus();
                    break;
                }
            }
        }
    }

    const addBook = new AddBook();
    addBook.init();











})();