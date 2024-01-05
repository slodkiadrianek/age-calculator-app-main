'use strict'

const day  = document.querySelector('#day')
const month  = document.querySelector('#month')
const year  = document.querySelector('#year')
const btn = document.querySelector('.button')

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
    const nowDate = todayDate.getDay()
    const nowMonth = todayDate.getMonth()
    const nowYear = todayDate.getFullYear()

    //
    function areYouInTheFuture(){
        if (todayDate < yourDate){
            alert('tak')
        }
    }
    function correctData(){
        if(m < 13 && y <= nowYear){
            if(shortMonth.includes(m) && d <=30 && d > 0){
                alert('kot')
            }
         else if( longMonth.includes(m) && d <=31 && d > 0){
                alert('no')
            }else if( m === February && d <= 29 && d > 0 ){
                alert('yes')
            }else{
                alert('hk')
            }
        }
    }
    correctData()


    // Is data correct

})


// liczba miesięcy 12 - x
// liczba lat  2024 - x  - 1
// liczba dni  5 + (liczba dni w miesiącu - x)