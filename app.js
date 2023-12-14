//   const numbers = [1, 2, 3, 4, 5];

//    function jami(){
//     let sum = 0
//     for(const rene of numbers){
//         sum+=rene
//     }
//     console.log(sum)
//    }
// jami()



// shetrialebulad

// function reverce(str){
//     let wrd = ''
//     for(let i = str.length-1;i>=0;i--){
//         wrd+=str[i]
//     }
//     console.log(wrd)
// }
// reverce('dzudzuebi')


//generatediv
// function generateDiv(){
//     setInterval(()=>{
//         let div = document.createElement('div')
//         div.style.width = '50px'
//         div.style.height = '50px'
//         div.style.background = 'purple'

//         document.body.appendChild(div)
//     },3000)
// }
// generateDiv()

//   const numbers = [1, 2, 3, 4, 5];
  
// function gavamravlot(){
//     const gavamravlot2 = numbers.map(numbers => numbers*100)
//     return gavamravlot2
// }
// const result = gavamravlot()
// console.log(result)




//  let gunsAndknifes = ['katana', 'xmali', 'glock']
 
// function addItems(gunsAndknifes,newGunsandknifes){
//     gunsAndknifes.push(newGunsandknifes)
//     console.log(gunsAndknifes)
// }
// addItems(gunsAndknifes,'usp')

//7)for loop
//  let xili = ['vashli','msxali','atami','banani']
  
//   for(let i = 0;i<xili.length;i++){
//     console.log(xili[i])
//   }


// let i = 0
// while(i<xili.length){
//     console.log(xili[i])
//     i++
// }





//9)for in loop
// const car = {
//     model:'ferari',
//     brand:'la ferari',
//     color:'red',
//     price:100000,
//     year:2012
// }

// for(const rene in car){
//     console.log(rene)
// }
// for(const rene in car){
//     console.log(car[rene])
// }
// for(const rene in car){
//     console.log(`${rene}:${car[rene]}`)
// }







// 10)splice method
//  let bikes = ['kawasaki','supermoto','ninja']

//  let newBikes = bikes.spice (1,2,'veno') 
// console.log(bikes)



// let bikes = ['kawasaki', 'supermoto', 'ninja'];

// function addItems(arr,startIdx,deleteCount,newItems){
//     const newBikes = arr.splice(startIdx,deleteCount,newItems)
//     return newBikes
// }

// addItems(bikes,1,2,'veno')
// console.log(bikes)


 // 11) slice method
//  let bikes2 = ['kawasaki','supermoto','ninja']
//  let newBikes2 = bikes.slice(0,1)
//  console.log(newBikes2)


// let bikes2 = ['kawasaki', 'supermoto', 'ninja'];

// function removeItem(arr,startIdx,endIdx){
//     const sliced = arr.slice(startIdx,endIdx)
//     return sliced
// }
// const newsliced = removeItem(bikes2,0,2)
// console.log(newsliced)




// 12) fillter method 
//  const numbers = [1,23,43,32,32,14,56,46,9,12,20]

//  const newNumbers = numbers.filter(numbers => {
//     return numbers > 21
//  })
// console.log(newNumbers)



// 13) reduce method 
// const numbers = [1,2,3,4,5]
// const newNumbers = numbers.reduce((previous,current)=> previous+current,0)
// console.log(newNumbers)


//  const words = ['apple', 'banana', 'cherry', 'date'];

// function calculateLetters(arr){
//     const all = arr.reduce((previous,current)=> previous+current.length,0)
//     return all
// }
// const newAll = calculateLetters(words)
// console.log(newAll)




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





