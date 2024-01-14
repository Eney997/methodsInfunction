//  const numbers = [1, 2, 3, 4, 5];
 
// function jami(){
//   let num = 0
//   for(const rene of numbers){
//     num+=rene
//   }
//   console.log(num)
// }
// jami()

// shetrialebulad

// function reverce(arr){
//   let wrd = ''
//   for(let i = arr.length-1;i>=0;i--){
//     wrd+=arr[i]
//   }
//   console.log(wrd)
// }
// reverce('dzudzuebi')

//generatediv
 
// function generateDiv(){
//   setInterval(()=>{
//     let div = document.createElement('div')
//     div.style.width = '50px'
//     div.style.height = '50px'
//     div.style.background = 'red'
//     document.body.appendChild(div)
//   },3000)
// }
// generateDiv()
// 

  //   const numbers = [1, 2, 3, 4, 5];
  
  //  function davmapot(){
  //   const newNumbers = numbers.map(numbers => numbers*10)
  //   return newNumbers
  //  } 

  //  const result = davmapot(numbers)
  //  console.log(result)



//   let gunsAndknifes = ['katana', 'xmali', 'glock'];
  
//  function davpushot(gunsAndknifes,newGuns){
//    gunsAndknifes.push(newGuns)
//    return gunsAndknifes
//  }
//  const result = davpushot(gunsAndknifes,'xanjali')
//  console.log(result)


//7)for loop
  //   let xili = ['vashli','msxali','atami','banani']
    
  //  for(let i = 0;i<xili.length;i++){
  //    console.log(xili[i])
  //  }
  // let i = 0
  // while(i<xili.length){
  //   console.log(xili[i])
  //   i++
  // }




//9)for in loop
//  const car = {
//     model:'ferari',
//     brand:'la ferari',
//     color:'red',
//     price:100000,
//     year:2012
// }

// for(const rene in car){
//   console.log(rene)
// }

  // for(const rene in car){
  //   console.log(car[rene])
  // }
  // for(const rene in car){
  //   console.log(`${rene}:${car[rene]}`)
  // }






// 10)splice method
//  let bikes = ['kawasaki','supermoto','ninja']

//  let newBikes = bikes.spice (1,2,'veno') 
// console.log(bikes)



//  let bikes = ['kawasaki', 'supermoto', 'ninja'];

//  function davasplisot(arr,startIdx,deleteCount,newItems){
//    const newBikes = arr.splice(startIdx,deleteCount,newItems)
//    return newBikes
//  }
//  const result = davasplisot(bikes,1,2,'veno')
//  console.log(bikes)


 // 11) slice method
//  let bikes2 = ['kawasaki','supermoto','ninja']
//  let newBikes2 = bikes.slice(0,1)
//  console.log(newBikes2)


//  let bikes2 = ['kawasaki', 'supermoto', 'ninja'];

//  function davaslicot(arr,startIdx,deleteCount){
//    const newBikes = arr.slice(startIdx, startIdx + deleteCount)
//    return newBikes
//  }
//  const result = davaslicot(bikes2,0,1)
//  console.log(result)





// 12) fillter method 
//      const numbers = [1,23,43,32,32,14,56,46,9,12,20]
     
//    const newNumbers = numbers.filter(numbers => {
//     return numbers <21
//    })
// console.log(newNumbers)



// 13) reduce method 
// const numbers = [1,2,3,4,5]
// const newNumbers = numbers.reduce((previous,current)=> previous+current,0)
// console.log(newNumbers)


  //   const words = ['apple', 'banana', 'cherry', 'date'];
  
  //   function reduced(){
  //     const newWords = words.reduce((previous,current)=> previous + current.length,0)
  //     return newWords
  //   }
   
  //  const result = reduced(words)
  //  console.log(result)


// 14)spread operatori
// masivebis da objebis gaertianeba
//masivebze
// const num1 = [1,2,3,4,5]
// const num2 = [6,7,8,9,0]

// const allNum = [...num1,...num2]

// console.log(allNum)
// //obieqtebze
// const cars = {
//     saxeli:'ferari',
//     country:'Italy',
// }
// const features = {
//     color:'red',
//     type:'hyper car',
// }
// const everythingTogether = {
//     ...cars,
//     ...features          //ert objshi dailogeba yvela
// }
// console.log(everythingTogether)



// promise mushaoba

// let promise = new Promise((resolve,reject)=> {
//   if(10>12){
//     resolve('warmatebuli')
//   }
//   reject('warumatebeli')
// }) 

// promise.then(result => console.log(result)).catch(error => console.log(error))



//async await 

// let data = new Promise((resolve, reject) => {
//   const users = ['gela', 'gela2', 'gela3'];
//   if (true) {
//     resolve(users);
//     return;
//   }
//   reject('mistake');
// });

// data.then(result => console.log(result)).catch(error => console.log(error));





//async await with try catch block

// let data = new Promise((resolve, reject) => {
//   const users = ['gela', 'gela2', 'gela3'];
//   if (false) {
//     resolve(users);
//     return;
//   }
//   reject('mistake');
// });



// const printUsers = async () =>{
//   const result = await data           // gaeshveba chveulebrivad magram shecdomas ar daichers amistvis arsebobs try catch blocki
//   console.log(result)
// }
// printUsers()



//try catchit 

// const printUsers = async ()=> {
//   try{
//     const result = await data
//     console.log(result)          // ase mushaobs key catch blocki
//   }catch(error){
//     console.log(error)
//   }
// }

// printUsers()






// fetch API





// const getUsers = async () => {
//   try {
//     const ul = document.querySelector('ul')
//     const users = await fetch('../stetham.json').then(response => response.json());
//     users.forEach(user => {
//       const li = document.createElement('li')                                        //elementebis cahsetva js dan with fetch API
//       li.innerHTML = `${user["first name"]} ${user["las name"]} - ${user["gmail"]}`
//       ul.appendChild(li)
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// getUsers();




// newSet

// const items = ['banana', 'apple', 'orange', 'apple', 'grape', 'banana'];

// function davsortot(arr){
//   return Array.from(new Set(arr)).sort()
// }
// const result = davsortot(items)
// console.log(result)

const items = ['banana', 'apple', 'orange', 'apple', 'grape', 'banana'];

function davsortot(arr){
  return Array.from(new Set(arr)).sort()
}
const result = davsortot(items)
console.log(result)