interface resultObj {
    x1: number;
    x2: number;
}

function interactive_mode(a: number, b: number, c: number): resultObj {
    const D: number = b ** 2 - 4 * a * c
    const x1: number = -b + Math.sqrt(D)
    const x2: number = -b - Math.sqrt(D)

    if (Number.isNaN(x1)) {
        return { x1: NaN, x2: x2 };
    }
    if (Number.isNaN(x2)) {
        return { x1: x1, x2: NaN };
    }
    if (Number.isNaN(x1) && Number.isNaN(x1)) {
        return { x1: NaN, x2: NaN };
    }

    return { x1: x1, x2: x2 };

}

export default interactive_mode