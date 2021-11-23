const double_zero = (value: number) => {
    if (value < 10) {
        return `0${value}`
    } else {
        return value
    }

}

const toHHMMSS = (secs: number) => {
    const hours = Math.floor(secs / 3600)
    const minutes = Math.floor(secs / 60) % 60
    const seconds = secs % 60
    let res = hours > 0 ? `${double_zero(hours)}H` : ''
    res += `${double_zero(minutes)}:${double_zero(seconds)}`
    return res
}

export default (
    toHHMMSS
)
