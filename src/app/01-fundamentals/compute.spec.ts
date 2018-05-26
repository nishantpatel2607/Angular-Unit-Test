
import {compute} from './compute';   

describe('compute',function(){
    it('should return 0 if input is negative',function(){
        const result = compute(-1);
        expect(result).toBe(0); // here we expect this result
    })

    it('should increment if input is positive',function(){
        const result = compute(5);
        expect(result).toBe(6);
        
    })
})