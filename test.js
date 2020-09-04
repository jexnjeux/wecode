function getEven() {
    num = Math.floor(Math.random() * 50)
    if (num % 2 === 0) {
        return num + '짝수'
    } else {
        return num + '홀수'
    }
}