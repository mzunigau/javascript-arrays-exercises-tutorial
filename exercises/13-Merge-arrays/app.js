var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let index = 0; index < firstArray.length; index++) {
        newArray.push(firstArray[index]);
        
    }

    for (let index = 0; index < secondArray.length; index++) {
        newArray.push(secondArray[index]);  
    }


    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));