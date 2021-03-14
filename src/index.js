module.exports = function towelSort (matrix) {
    if (!matrix || !matrix.length) return [];
    var sortMatrix =[];
    for (let i=0; i<matrix.length; i++){
        if (i%2==0) Array.prototype.push.apply(sortMatrix,matrix[i]) 
        else Array.prototype.push.apply(sortMatrix,matrix[i].reverse());
    }
    return sortMatrix;
}
