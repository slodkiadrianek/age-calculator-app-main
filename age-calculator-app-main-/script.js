'use strict'

const day  = document.querySelector('#day')
const month  = document.querySelector('#month')
const year  = document.querySelector('#year')
const btn = document.querySelector('.button')
const CalcedDay = document.querySelector('.day')
const CalcedMonth = document.querySelector('.month')
const CalcedYear = document.querySelector('.year')
const invalidDay = document.querySelector('.invalid__day')
const invalidMonth = document.querySelector('.invalid__month')
const invalidYear = document.querySelector('.invalid__year')

btn.addEventListener('click', function(){
    console.log(day.value, month.value, year.value);
    // Month
    const shortMonth = [4,6,9,11]
    const longMonth = [1,3,5,7,8,10,12]
    const February = 2
    // Dane użytkownika
    let d = parseInt(day.value)
    let m = parseInt(month.value)
    let y = parseInt(year.value)
    let yourDate = new Date(y, m - 1, d)
    console.log(yourDate);
    // Obecna data
    const todayDate = new Date()
    const nowDate = todayDate.getDate()
    const nowMonth = todayDate.getMonth()
    const nowYear = todayDate.getFullYear()

    //
    function areYouInTheFuture(){
        if (todayDate > yourDate){
            return true
        }else{
            return false
        }
    }
    console.log(areYouInTheFuture());

    function correctData(){
        if(m < 13 && m > 0 && y <= nowYear){
            if(shortMonth.includes(m) && d <=30 && d > 0){
                return true
            }
            else if( longMonth.includes(m) && d <=31 && d > 0){
                return true
            }else if( m === February && d <= 29 && d > 0 ){
                return true
            }else{
                invalidDay.textContent = 'Must be a valid day'
                return false
            }
           
        }else{
            return false
        }
    }
    console.log(correctData());
    

    function calcDay(){
        if(shortMonth.includes(m)){
         CalcedDay.textContent = nowDate + (31 - d)  
        }else if(longMonth.includes(m)){
           CalcedDay.textContent = nowDate + (31   - d)  
        }else{
            CalcedDay.textContent = nowDate + (29 - d)
        }
    }
    function calcMonth(){
        CalcedMonth.textContent = 12 - m
    }

    function calcYear(){
        CalcedYear.textContent = nowYear - y -1
    }

    if(areYouInTheFuture() && correctData()){
        calcDay()
        calcMonth()
        calcYear()
        invalidMonth.textContent =  invalidYear.textContent =  invalidDay.textContent =' '
    }
    if( m >12 || m < 0  ){
        invalidMonth.textContent ="Must be a valid month"
    }
    if( y > nowYear){
        invalidYear.textContent="Must be in the past"
    }if( d > 31){
        invalidDay.textContent = 'Must be a valid day'
    }
    if(d === NaN){
         invalidDay.textContent = 'This field is required'
    }
    if(m === NaN){
         invalidMonth.textContent = 'This field is required'
    }
    if(y === NaN){
         invalidYear.textContent = 'This field is required'
    }
})


// liczba miesięcy 12 - x
// liczba lat  2024 - x  - 1
// liczba dni  5 + (liczba dni w miesiącu - x)