export function isNumber(
    s: string,
    opts = {
        allowDecimal: true,
        allowEmpty: false,
        allowExponent: true,
        allowOperand: true,
        allowPadding: true,
    },
): boolean {
    if (opts.allowPadding) {
        s = s.trim();
    }
    if (opts.allowEmpty && s === "") {
        return true;
    }
    if (
        opts.allowOperand &&
        /(\+|-)/.test(s[0]) &&
        isNumber(s.substr(1), {
            allowDecimal: opts.allowDecimal,
            allowEmpty: false,
            allowExponent: opts.allowExponent,
            allowOperand: false,
            allowPadding: false,
        })
    ) {
        return true;
    }
    if (opts.allowExponent) {
        const lr = s.split("e");
        if (
            lr.length === 2 &&
            isNumber(lr[0], {
                allowDecimal: true,
                allowEmpty: false,
                allowExponent: false,
                allowOperand: false,
                allowPadding: false,
            }) &&
            isNumber(lr[1], {
                allowDecimal: false,
                allowEmpty: false,
                allowExponent: false,
                allowOperand: true,
                allowPadding: false,
            })
        ) {
            return true;
        }
    }
    if (opts.allowDecimal) {
        const lr = s.split(".");
        if (
            lr.length === 2 &&
            lr.some((n) => n !== "") &&
            isNumber(lr[0], {
                allowDecimal: false,
                allowEmpty: true,
                allowExponent: false,
                allowOperand: false,
                allowPadding: false,
            }) &&
            isNumber(lr[1], {
                allowDecimal: false,
                allowEmpty: true,
                allowExponent: false,
                allowOperand: false,
                allowPadding: false,
            })
        ) {
            return true;
        }
    }
    if (/^\d+$/.test(s)) {
        return true;
    }
    return false;
}
