function User(id, email) {
    this._id = id
    this._email = email
}
User.prototype = {
    //getter , setter
    get id() {
        return this._id
    },
    set id(param) {
        this._id = param
    },
    get email() {
        return this._email
    },
    set email(param) {
        this._email = param
    },
    login: function () {
        console.log(this._id + '님 로그인 성공')
    },
    logout: function () {
        console.log(this.id + '님 로그아웃 되었습니다.')
    }
};
const user1 = new User();
user1.id = "아이디";
user1.email = "아이디@naver.com";
console.log(user1.id, user1.email);