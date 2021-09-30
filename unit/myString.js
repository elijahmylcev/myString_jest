class MyString extends String {
    
    has(substring) {
        return this.includes(substring) //true or false
    }

    remove(char) {
        const i = this.indexOf(char);
        
        if (i == -1) {
            return null
        } else {
            this.remove(i)
            return i
        }
    }
}

module.exports = {MyString};