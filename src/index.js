
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ((arguments.length > 0) && (matrix.length > 0)) {
        const sortedMatrix = matrix.map((el,i) => {
            if (Array.isArray(el)) {
                return (i % 2 !== 0 ? el.reverse() : el);
            }
        });

        return [].concat(...sortedMatrix);
    } else if (arguments.length === 0) {
        return [];
    } else {
        return matrix;
    }
}
