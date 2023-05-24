class MyClass {
    #num = 200;
    #data1() {
        console.log(this.#num);
    }
    data2() {
        this.#data1();
    }
}
const m1 = new MyClass();
m1.data2();