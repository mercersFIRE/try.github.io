// try{
//     alert("Hi from try");
// }
// catch(error){
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.writeln(error.name+" ");
//     console.write(error.message+" ");

// }
// finally{
//     alert("Finally");
// }
// function myfunction()
// {
//     const message = document.getElementById("paraId");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try
//     {
//         if(x== "" ) throw "is empty";
//         if(isNaN(x)) throw "isnt a number";
//         x = Number(x);
//         if(x>10) throw "is too high";
//         if(x<5) throw "is too low";
//     }
//     catch(e)
//     {
//         message.innerHTML= " Input " + e;
//     }
// }
console.clear();
console.log(window);
const promise1= new Promise((resolve, reject) => {
    let completedPromise = true;
    if(completedPromise)
    {
        resolve("completed promise 1");
    }
    else
    {
        reject("complete promise 1");
    }
})