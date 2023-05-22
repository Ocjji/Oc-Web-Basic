class Man {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = `${this.firstName} ${this.lastName} 입니다.`;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName} 입니다.`;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const man = new Man('홍', '길동');
man.fullName = '강 호동';
console.log(man.fullName);
console.log(man);