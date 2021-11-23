import toHHMMSS from "./time_utils";

describe('time_util second display', () => {
    it('should display second', () => {
        expect(toHHMMSS(10)).toEqual('00:10')
    })
    it('should display minute', () => {
        expect(toHHMMSS(70)).toEqual('01:10')
    })
    it('should display hours', () => {
        expect(toHHMMSS(3610)).toEqual('01H00:10')
    })
})