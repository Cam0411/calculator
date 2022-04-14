export {}
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.sev')
const egiht = document.querySelector('.eig')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const douzero = document.querySelector('.douzero')
const percent = document.querySelector('.percent')
const point = document.querySelector('.point')
const sum = document.querySelector('.sum')
const min = document.querySelector('.min')
const dou = document.querySelector('.dou')
const divi = document.querySelector('.divi')
const del =document.querySelector('.del')
const dele  = document.querySelector('.dele')
const el = document.querySelector('.eval')
const value = document.querySelector('.val') !
const res = document.querySelector('.result') !
function caculator(){
    one?.addEventListener('click',() => {
       value.innerHTML += '1'
       res.innerHTML =  `${res.innerHTML}`
    })
    two?.addEventListener('click',() => {
        value.innerHTML += '2'
     })
     three?.addEventListener('click',() => {
      value.innerHTML += '3'
   })
     four?.addEventListener('click',() => {
       value.innerHTML += '4'
    })
    five?.addEventListener('click',() => {
      value.innerHTML += '5'
   })
   six?.addEventListener('click',() => {
      value.innerHTML += '6'
   })
   seven?.addEventListener('click',() => {
      value.innerHTML += '7'
   })
   egiht?.addEventListener('click',() => {
      value.innerHTML += '8'
   })
   nine?.addEventListener('click',() => {
      value.innerHTML += '9'
   })
   zero?.addEventListener('click',() => {
      value.innerHTML += '0'
   })
   douzero?.addEventListener('click',() => {
      value.innerHTML += '00'
   })
   percent?.addEventListener('click',() => {
      value.innerHTML += '%'
   })
   point?.addEventListener('click',() => {
      value.innerHTML += '.'
   })
     sum?.addEventListener('click',() => {
        value.innerHTML += ' + '
     })
     min?.addEventListener('click',() => {
        value.innerHTML += ' - '
     })
     dou?.addEventListener('click',() => {
        value.innerHTML += ' * '
     })
     divi?.addEventListener('click',() => {
         value.innerHTML += ' / '
     })
     del?.addEventListener('click',() => {
      value.innerHTML = ' '
      res.innerHTML = ' '
   })
   dele?.addEventListener('click',() => {
      const result = value.innerHTML
      const arr = result.split('')
      arr.pop()
      value.innerHTML = String(arr.join('')).trim()
   })
     function resValue(){
         el?.addEventListener('click',() => {
             try {
            
               const result = value.innerHTML
               if (result.length > 0){
                  res.innerHTML = eval(result)
                  value.innerHTML = ''
               }
           } catch (e) {
               if (e instanceof SyntaxError) {
                  res.innerHTML = 'Error'
                  value.innerHTML = ''
               }
           }
         })
     }
     resValue()
}
caculator()