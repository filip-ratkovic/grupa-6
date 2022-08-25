function funk(arg,arg2) {
this.firstName = arg;
this.lastname = arg2;
}

const obj = new funk("filip", "rat");
console.log(obj);