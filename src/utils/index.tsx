export const isEmptyObject = (obj: Record<string, unknown>): boolean => {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
        return true;
    } else {
        return false;
    }
};
