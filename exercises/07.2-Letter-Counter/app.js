let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let index = 0; index < par.length; index++) {

    let letra = par[index].toLowerCase();    
   
    if (letra != ' ') {

        if (counts.hasOwnProperty(letra)) {

            let value = counts[letra];
            counts[letra] = value + 1;

        } else {

            counts[letra] = 1;

        }
    }
}
console.log(counts);