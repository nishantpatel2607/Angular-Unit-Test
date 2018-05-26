

import {getCurrencies} from './getCurrencies';

describe('getCurrencies',()=>{
    it('should return supported currencies',() =>{
        const result = getCurrencies();
        expect(result).toContain("USD");
        expect(result).toContain("AUD");
        expect(result).toContain("EUR");
        expect(result.length).toBe(3);
    })
});