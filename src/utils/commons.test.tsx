import { calculateSixPackBeersQuantity } from './commons';

describe('Calculate Six Pack Beers Quantity', () => {
    it('should be cero packs', () => {
        expect(calculateSixPackBeersQuantity(0, 0)).toEqual(0);
    });
    it('should be one packs', () => {
        expect(calculateSixPackBeersQuantity(1, 21)).toEqual(1);
    });
    it('should be two packs', () => {
        expect(calculateSixPackBeersQuantity(10, 21)).toEqual(2);
    });
    it('should be three packs', () => {
        expect(calculateSixPackBeersQuantity(18, 19)).toEqual(3);
    });
    it('should be four packs', () => {
        expect(calculateSixPackBeersQuantity(10, 25)).toEqual(4);
    });
});
