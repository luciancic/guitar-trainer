export function getRandomFrom(arr) {
    return arr[randUpTo(arr.length)]
}

export function randUpTo(max) {
    return Math.floor(Math.random() * max)
}
