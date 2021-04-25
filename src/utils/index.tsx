export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    } else {
        return false;
    }
};

export const calculateSixPackBeersQuantity = (people: number, temperature: number): number => {
    let drink = 0;
    if (temperature >= 20 || temperature <= 24) {
        drink = people * 1;
    }
    if (temperature < 20) {
        drink = people * 0.75;
    }
    if (temperature > 24) {
        drink = people * 2;
    }
    const pack = drink / 6;
    return pack;
};
