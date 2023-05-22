function User(id, email) {
    this.id = id;
    this.email = email;
}

// 로그인, 로그아웃은 공통 : 상속
User.prototype.login = function () {
    console.log('로그인되었습니다.', this.id);
}
User.prototype.logout = function () {
    console.log('로그아웃되었습니다.', this.id);
}
// User.prototype = {
//     check() {
//         console.log('check 되었습니다.');
//     }
// }

const user1 = new User('학생', 'aaa@naver.com');
const user2 = new User('관리자', 'bbb@naver.com');
const user3 = new User('직원', 'ccc@naver.com');

console.log(user1.id, user1.email);
user1.login();
// user1.check();