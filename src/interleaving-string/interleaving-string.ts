export function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    if (s1 === "" && s2 === "" && s3 === "") {
        return true;
    }
    return (
        (s3[0] === s1[0] &&
            isInterleave(s1.substring(1), s2, s3.substring(1))) ||
        (s3[0] === s2[0] && isInterleave(s1, s2.substring(1), s3.substring(1)))
    );
}
