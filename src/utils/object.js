export function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

export function cloneDeep(target, map = new WeakMap()) {
    if (!isObject(target)) return target;

    const res = Array.isArray(target) ? [] : {};

    if (map.has(target)) {
        return map.get(target);
    }

    map.set(target, res);

    const keys = Array.isArray(target) ? undefined : Object.keys(target);

    forEach(keys || target, (value, index) => {
        // represent target is object
        if (keys) {
            index = value;
        }
        res[index] = cloneDeep(target[index], map);
    });

    return res;
}


export function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}
