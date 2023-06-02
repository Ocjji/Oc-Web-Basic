; (() => {
    const get = target => document.querySelector(target);

    const form = get('#form');
    const text = get('#text');
    const todoList = get('.todo-list');

    let obj = [];
    obj = JSON.parse(localStorage.getItem("obj")) || [];

    class TodoApp {
        constructor(obj) {
            this.obj = obj;
        }

        init() {

            const toggleChecked = (element) => {
                element.addEventListener('click', e => {
                    console.log(e.currentTarget.parentElement);
                    e.currentTarget.parentElement.classList.toggle('checked');
                    console.log(e.currentTarget.parentElement.children[1]);
                    this.obj = this.obj.map((item) => {
                        let temp = item;
                        if (e.currentTarget.parentElement.classList.contains('checked') && item.todo === e.currentTarget.parentElement.children[1].textContent && item.state === false) {
                            temp.state = true;
                        } else if (!e.currentTarget.parentElement.classList.contains('checked') && item.todo === e.currentTarget.parentElement.children[1].textContent && item.state === true) {
                            temp.state = false;
                        }
                        return temp;

                    });
                    localStorage.setItem("obj", JSON.stringify(this.obj));
                })
            }
            const delTodo = (delBtn) => {
                delBtn.addEventListener('click', e => {
                    // console.log(e.currentTarget.parentElement);
                    e.currentTarget.parentElement.remove();
                    // console.log(e.currentTarget.previousSibling.textContent);
                    this.obj = this.obj.filter(item => item.todo !== e.currentTarget.previousSibling.textContent);
                    localStorage.setItem("obj", JSON.stringify(this.obj));
                    text.focus();
                })
            }
            const showTodo = () => {
                todoList.innerHTML = '';
                this.obj.forEach(todoItem => {
                    const { state, todo } = todoItem;
                    let li = document.createElement('li');
                    let icon = document.createElement('i');
                    let strong = document.createElement('strong');
                    let delBtn = document.createElement('button');
                    if (state) {
                        li.classList.add('checked');
                    }
                    icon.textContent = '✓';
                    strong.textContent = todo;
                    toggleChecked(icon);
                    toggleChecked(strong);
                    delBtn.textContent = '삭제';
                    delBtn.classList.add('del');
                    delTodo(delBtn);

                    li.append(icon, strong, delBtn);
                    todoList.append(li);
                })
                text.value = '';
                text.focus();
            }
            const addTodo = () => {
                this.obj = [
                    ...this.obj,
                    { state: false, todo: text.value }
                ];
                localStorage.setItem("obj", JSON.stringify(this.obj));
            }

            form.addEventListener('submit', e => {
                let isDup = true;
                e.preventDefault();
                this.obj.forEach(todoItem => {
                    if (todoItem.todo === text.value) {
                        isDup = false;
                        alert('중복값 입력이 불가합니다.');
                        showTodo();
                    }
                })
                if (isDup && text.value) {
                    addTodo();
                    showTodo();
                }
            })
            showTodo();
        }
    }

    const todoApp = new TodoApp(obj);
    todoApp.init();
})();