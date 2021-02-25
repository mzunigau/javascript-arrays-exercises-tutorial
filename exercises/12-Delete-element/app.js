var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var newPeople=[];
    for (let index = 0; index < people.length; index++) {
        if (people[index]!=personName){
            newPeople.push(people[index]);
        }
        
    }

    return newPeople;

}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));