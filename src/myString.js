class MyString extends String {

  has(substring) {
    return this.includes(substring) //true or false
  }

  remove(char) {
    const index = this.indexOf(char);

    if (index === -1) {
      return null
    } else {
      const first = this.slice(0, index);
      const second = this.slice(index + 1);
      return `${first}${second}`;
    }
  }
}

module.exports = {
  MyString
};