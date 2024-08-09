
// document.getElementById("myBtn").onclick = function () {
//     alert('Welcome Ali');
//     };

//     document.getElementById("myBtn1").onmouseover = function () {
//         alert('Welcome Ali to the js course again');
//         };


// // document.getElementById("myBtn2").addEventListener('click', function(){
// //     alert("Hello ALi, ya addeventlistener hai")
// // });

// document.getElementById("myBtn2").addEventListener('click', () => {
//     alert("Hello ALi, ya addeventlistener hai")
// });

// document.getElementById("myBtn3").addEventListener('mouseover', () => {
//     alert("Hello ALi, ya addeventlistener hai")
// });

// let myButton = document.getElementById("myButton");
// let rectangleDiv = document.querySelector(".rectangle");

// const handleMouseEvents = () => {
//     console.log("click");
//     rectangleDiv.style.backgroundColor = "#f5ee62";
// };

// const handleMouseEvents2 = () =>{
//     console.log("dblclick");
//     rectangleDiv.classList.add("addTransition");
// };

// const handleMouseEvents3 = () => {
//     rectangleDiv.classList.add("addTransition3")
// }

// const handleMouseEvents4 = () => {
//     rectangleDiv.classList.add("addTransition4")
// }

// const handleMouseEvents5 = () => {
//     rectangleDiv.classList.add("addTransition5")
// }

// const handleMouseEvents6 = () => {
//     rectangleDiv.classList.add("addTransition6")
// }

// myButton.addEventListener('click', handleMouseEvents)
// myButton.addEventListener('dblclick', handleMouseEvents2)
// myButton.addEventListener('mouseover', handleMouseEvents3)
// myButton.addEventListener('mouseout', handleMouseEvents4)
// myButton.addEventListener('mousedown', handleMouseEvents5)
// myButton.addEventListener('mouseup', handleMouseEvents6)


// const handleKeyPress = (event) => {
//     console.log(event);
//     console.log("Key pressed:", event.key);
//     console.log("Key code:", event.code);
//     console.log("Event type:", event.type);
// }

// document.querySelector(
//     ".keyPressed"
// ).textContent = `Key pressed: ${event.key}`;

// document.querySelector(
//     ".keyCode"
// ).textContent = `Key code: ${event.code}`;

// document.querySelector(
//     ".charCode"
// ).textContent = `Char code: ${event.key.charCodeAt(0)}`;

// document.querySelector(
//     ".eventType"
// ).textContent = `Key type: ${event.type}`;




// let myInput = document.getElementById("myInput");
// myInput.addEventListener('keydown', handleKeyPress);
// myInput.addEventListener('keyup', handleKeyPress);


// const inputElem = document.getElementById("myInput");
// const handleInput = (event) =>{
//     console.log(event);
//     console.log("Input value:", event.target.value);
//     console.log("Input name:", event.target.name);
//     console.log("Input type:", event.inputType);
//     console.log("Event type:", event.target.type);
// };
// inputElem.addEventListener("input", handleInput);


/////////////////////////////////////////////////////////////////////////end//
///////// start advance js

// const jsonString = '{"name":"Vinod","age": 30, "city": "karachi"}';
// const parsedData = JSON.parse(jsonString);
// console.log(parsedData); 


// const studentBioData = {
//     firstName: "Vinod",
//     lastName: "thapa",
//     age: 20,
//     gender: "male",
//     grade: "A",
// courses: ["Math", "Science", "English"],
// address: {
//     street: "123 Main St",
//     city: "cityVille",
//     state: "State",
//     zipCode: "12345",
// },
// };

// const addTodoList = () => {
//     localStorage.setItem("objectData", JSON.stringify(studentBioData));
// };

// const getTodoList = () => {
//     const retrievedStudentData = JSON.parse(localStorage.getItem("objectData"));
//     console.log("Retrieved from local Storage:", retrievedStudentData);
// };

//  const removeTodoList = () => {
//     const removedData = localStorage.removeItem("objectData");
//     console.log("Data after removal:", removedData);
//  }



// document.getElementById("addBtn").addEventListener("click", () => {
//     addTodoList();
// });

// document.getElementById("getBtn").addEventListener("click", () => {
//     getTodoList();
// });

// document.getElementById("removeBtn").addEventListener("click", () => {
//     removeTodoList();
// });


//////////////// learn date time ogjects ////////////////

// const currentDate = new Date();
// console.log(currentDate);

// const dateString = "2024-02-19T10:44:09.274Z";
// const dataFromString = new Date(dateString);
// console.log(dataFromString);


// const Date1 = new Date(2024,7);
// console.log(Date1);


// const Date2 = new Date(2024,7,2);
// console.log(Date2);


// const Date3 = new Date(2024,7,1,10);
// console.log(Date3);


// const Date4 = new Date(2024,7,1,10,44);
// console.log(Date4);


// const Date5 = new Date(2024,7,1,10,44,20);
// console.log(Date5);


// const Date6 = new Date(2024,7,1,10,44,20,274);
// console.log(Date6);

// const currentDate = new Date();
// const year = currentDate.getFullYear();
// const month = currentDate.getMonth();
// const day = currentDate.getDay();
// const hours = currentDate.getHours();
// console.log(month);

//////////////// set methods /////////////////////////////

// const currentDate = new Date();
// currentDate.setFullYear(2028);
// currentDate.setMonth(5);
// console.log(currentDate);


////////////////// get hours ///////////////////

// const currentTime = new Date();

// const hours = currentTime.getHours();
// const minute = currentTime.getMinutes();
// const second = currentTime.getSeconds();
// const milliSecond = currentTime.getMilliseconds();
// const time = currentTime.getTime();
// console.log(hours);


/////////////// set time methods/////////////////


// const setTime = new Date();
// setTime.setHours(2);
// setTime.setMinutes(50);
// setTime.setSeconds(33);
// setTime.setMilliseconds(111);

// console.log(setTime);


//////////// localtime ////////////

// const date =  new Date();
// const localString = date.toLocaleString();
// console.log(localString); 



// const newDate = new Date();
// console.log(Date.now());
// console.log(newDate.getTime());


// let getDaysDifference = (d1, d2) => {
//   let oneDay = 24 * 60 * 60 * 1000;
//   let diff = d2 - d1;
//   return Math.round(diff / oneDay);
// };
// const date1 = new Date("2024-02-19");
// const date2 = new Date("2024-03-01");
// console.log(getDaysDifference(date1, date2));


////////////////// setTimeout ///////////////////////////////

// function setTime(){
//   console.log("This is settime out");
// }
// setTimeout(setTime, 5000);


// function setTime(x){
//     console.log("This is settime out", x);
//   }
//   setTimeout(() =>  setTime(10), 3000);


// function setTime(){
//     console.log("This is settime out", );
//   }
//   setInterval(setTime, 3000);


// function clearTime(){
//     console.log("This is settime out", );
//   }
//  const myWork = setTimeout(clearTime, 3000);
//  clearTimeout(myWork);


// const reapedFunction = () => {
//     console.log("This is settime out");
//   };
//   const clearInter = setInterval(reapedFunction, 1000);
//   setTimeout(() => {
//       clearInterval(clearInter);
//   }, 5000);


////////////////////////////// objects .........//////////////////

// const person = {
//     student: 10,
//     name: "ali",
//     greet: function(){
//         console.log("world best js course");
//     },
// };
// person.student = 15;
// person.job = "web developer"
// console.log(person);
// person.greet();


// let idType = "studentId"

// const person1 = {
//     sName: "Ali", [idType]: "A12345", class: 10, greet: function (){
//         console.log(`My Name is ${person1["sName"]} and my is ${idType}, and my prsonal id ${person1[idType]}`);
        
//     } ,
// };
// person1.greet();


// let a = 10;
// const modify = (x) =>  (a=20);
// console.log(modify(a));
// console.log(a);


// let obj = {id:5, name: "Zulfiqar"};
// let newObj = Object.assign({}, obj);
// newObj.name = "Ali";
// console.log(newObj);
// console.log("orginial", obj);

// let obj1 = {name: "vinod"}
// let obj2 = {name: "vinod"}
// obj3 = obj1

// const objResult = obj3 === obj1 ? true : false ;
// console.log(objResult);



// const person = {
//     student: 10,
//     name: "ali",
//     id: 1212,
//     greet: function(){
//         console.log("world best js course");
//     },
// };

// let keys = Object.keys(person);
// console.log(keys);


// let values = Object.values(person);
// console.log(values);


// let enteries = Object.entries(person);
// console.log(enteries);

// console.log(person.hasOwnProperty("name"));

// const target = {a: 1, b: 4}
// const source = {b: 3, c: 4}
// const result = Object.assign(target, source);
// console.log(result);

// Object.freeze(person);
// person.id = "2323";
// console.log(person);


///////////// How javascript works ///////////////////////////////

////////// what is synchronous ///////////////////////////////

// const f2 = ()=>{
//     console.log("fun2 start and ends");
// };

// const f1 = ()=>{
//     console.log("fun1 is start");
//     f2();
//     console.log("fun1 is end");
// };
// f1();


/////////////// asynchronous /////////////////////////////

// const fun2 = () =>  {
//     setTimeout(() => {
//         console.log("fun2 is start and ends");  
//     }, 2000);
// };

// const fun1 = () => {
//     console.log("fun1 is start");
//     fun2();
//     console.log("fun1 is ends");
// };
// fun1();

////////////////////asynchronous////////////////////////


///////////////////// Ecascript 2015 to 2023..... ///////////////////////////

////////////// ojects modern //////////////

// const name = "Zulfiqar";
// const age = 18;
// const person = (name: name, age: age) /// old version
// const person = {name, age};/// new version
// console.log(person);

////////////////// array destruction / //////////

// const numbers = [10,20,30];
// // const first = numbers[2]; /// old version
// // const [first, second, third] = numbers; // new versin destruction array/
// const [, , third] = numbers; // new versin ignoring element
// console.log(third);

// let a = 10; /// new version / ///////////////
// let  b = 30;
// [a,b] = [b,a];
// console.log(a, b);


// const user = {name: "ali", age: 18};
// console.log(user.name); /// old version
// // const myName = user.name;
// const {name,age} = user;
// console.log(name,age);

/////////////////////////// ////////////////////////////////////

// const numbers1 = [1,2,3];
// const numbers2 = [4,5,6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

///////////////////// Ecascript 2016 to 2023..... ///////////////////////////

// let base = 2;
// let exponent = 3;
// console.log("using math.pow()", Math.pow(base, exponent)); // old version
// console.log("using math.pow()", base ** exponent); // new version

// let area = Math.PI*5**2;
// console.log(area.toFixed(2));


///////////////////// Ecascript 2017 to 2023..... ///////////////////////////

// const myNames = "zulfiqar";
// // const paddName = myNames.padStart(15);
// const paddName = myNames.padStart(15, "+");
// console.log(paddName);
// console.log(paddName.length);

////////////////////// Ecascript 2018 to 2023..... ///////////////////////////

// const student = {
//     age: 10, name: "ali", student: true,
// }
// const {age, ...others} = student;
// console.log(others); /// rest operator


// const obj1 = {a:10, b:20, c:50};
// const obj2 = {c:30, d:40};///// spread operator

// const newObj = {...obj1, ...obj2};
// console.log(newObj);

///////////////////// Ecascript 2019 to 2023..... ///////////////////////////

// const nestedArray = [1,2,[3,4],5];
// const flattendArray = nestedArray.flat();
// console.log(flattendArray);

// const nestedArray1 = [1,[2,[3,4]],5];
// const flattendArray1 = nestedArray1.flat(2); /// 2 array change in one array
// console.log(flattendArray1);

// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((currValue)=> currValue.split(" "));
// console.log(newArr);

// const person = {name: "vinod, age: 20"};
// const entries = Object.entries(person);
// console.log(entries);
// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// let str = "        thapa         ";
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.trimStart().length);
// console.log(str.trimEnd().length);

// const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);


// const anotherLargeNumber = BigInt("0123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);


// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

// let favNum = 0;  /// o means fales in js agar 0 chhiya hi to hum use karta hai nullish operator
// // let userFavNumber = favNum || 10;
// let userFavNumber = favNum ?? 10;
// console.log(userFavNumber);

// const str  = "Hello, world! Hello again";
// const str1 = str.replaceAll("Hello", "Hi");
// console.log(str1);

// const str  = "Hello,      world!     Hello again";
// const str1 = str.replaceAll(/\s+/g, " ");
// console.log(str1);

// let y = 10;
// y &&= 20;
// console.log(y);

// const book = {
//     name: "thapa", author: "technical"
// };
// // console.log(book.hasOwnProperty("name"));
// // console.log(book.hasOwnProperty("price"));
// console.log(Object.hasOwn(book, "name"));

// const student = Object.create(null);
// console.log(typeof student);
// student.name = "Zulfiqar Bhai";
// // console.log(student.hasOwnProperty("name"));
// console.log(Object.hasOwn(student, "name"));

// const array = [1,2,3,4,5,6];
// console.log(array.findLast((currElem)=> currElem));
// console.log(array.findLastIndex((currElem)=> currElem));


// const myNames = ["ALi", "Muhammad", "Akbar"];
// const sortedArr = myNames.toSorted();
// console.log("sorted", sortedArr);

// console.log("orginial", myNames);
// console.log("reversed", myNames);

/////////////////////////////////// start main advance javascript /////////////////////

//  1) Event propagation .
// 2) Higher order function. 
// 3) Call back function .
// 4) CLosures & function currying
// 5) callback Hell 
// 6) Fetch API 
// 7) Promises 
// 8) Async-await 
// 9) Error Handing in js

//////////// Higher-Order-Function  amd callback function///////////////////;

    // function saying(name){
    //     return "Hello,"+name+ "!";
    // };   
    // let saying2 = saying;
    // console.log(saying("Ali"));

//     function processUserInput(name, callback){
//      console.log("Received input:"+ name);
//      callback(name);
//     }

// function greetUser(name){  ///// callback function
//   console.log(`Hello! ${name}`);
// }
// processUserInput("Vinod", greetUser); /// higher order function
    

//  const fun1 = (a,b,operation)=>{
//     return operation(a,b);
//  }
//  const fun2  = (a,b)=>{ /// fun2 is callback fun
//     return a+b;
//  }
//  const fun3  = (a,b)=>{ /// fun2 is callback fun
//     return a-b;
//  }

//  console.log(fun1(5,5,fun2)); /// fun1 is higher order function
//  console.log(fun1(5,10,fun3)); /// fun1 is higher order function
 
/////////// Higher-Order-Function  amd callback function///////////////////;


   ////////////// promise // promis ka andar 3 states hoti hai 1) promise 2) pending
   // 3) settled ka andar resolved and rejected ////

   // const pr = new Promise((resolve, reject) => {
   //    setTimeout(()=>{
   //       reject("Hey, I dont"); /// yaha resolve aur reject ki condition lagagi
   //    }, 3000)
   // });

   // pr.then((res)=>{
   //    console.log(res);
   // })
   // .catch((error)=>{
   //    console.log(error);
   // })
   // .finally(()=>{
   //    console.log("Dont worry dear, We all miss you.");
   // });


   // const studentName = "Vinod";
   // const enrollStudent = (studentName) => {
   //    return new Promise((resolve, reject) => {
   //    setTimeout(()=>{
        
   //          const isSucessful = Math.round() > 0.4;
   //          if(isSucessful){
   //             resolve(`EnrollStudent sucessful for ${studentName}`);
   //          }else{
   //             reject(`Enrollstudent failed for ${studentName} Please try again`);
   //          }
   //    }, 2000)
   //    });
   // };
   // enrollStudent(studentName)
   // .then((res)=>{
   //    console.log(res);
   // })
   // .catch((err)=>{
   //    console.log(err);
   // })
   // .finally(()=>{
   //    console.log("Enrollstudent process completed"); 
   // });

   /////// promise methods promise.all promise.allsettled promise.race //////////////////

   // const promise1 = new Promise((resolve, reject)=>{
   //    setTimeout(()=>{ resolve("First")}, 2000)
   // });

   // const promise2 = new Promise((resolve, reject)=>{
   //    setTimeout(()=>{ reject("Failed")}, 2000)
   // });

   // const promise3 = new Promise((resolve)=>{
   //    setTimeout(()=>{ resolve("Third")}, 1000)
   // });

   // // Promise.all([promise1, promise2 ,promise3])  // promiseAll
   // // .then((values)=>{
   // //    console.log(values);
   // // })
   // // .catch((err)=>{
   // //    console.log(err);
   // // });

   // // Promise.allSettled([promise1, promise2 ,promise3])   /// promise allsettled
   // // .then((values)=>{
   // //    console.log(values);
   // // })
   // // .catch((err)=>{
   // //    console.log(err);
   // // });

   // Promise.race([promise1, promise2 ,promise3]) // promise race
   // .then((values)=>{
   //    console.log(values);
   // })
   // .catch((err)=>{
   //    console.log(err);
   // });



   ///////////////////////////////////////// promise/////////////////



   //////////// fetch api  asycn await arroe handling////////////////////////////////////////////////
    
  const apiBody = document.querySelector(".api-body");
  const apiUrl = "https://icanhazdadjoke.com/";

//   async function fetchData( ){  async fun with simple fun
 const fetchData = async()=>{   // async fun with arrow fun
   try{
      const res  = await fetch(apiUrl,{
         headers: {
            Accept: "application/json",
         },
      });
      const data = await res.json();
      console.log(data.joke);
      apiBody.innerHTML = data.joke;
   }catch(error){
      apiBody.innerHTML = error;
      console.log(error);
   }
  }
  fetchData();




   //////////// fetch api ////////////////////////////////////////////////
