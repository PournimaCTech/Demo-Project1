// --The entire business depends on what a customer orders. Once we have an order, we start production and then we serve ice cream. So, we'll create two functions ->
// order
// production--

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 let order = (fruit_name, call_production) =>{
    setTimeout(function(){
      console.log(`${stocks.Fruits[fruit_name]} was selected`)
  // Order placed. Call production to start
     call_production();
    },2000)
  };

  let production = () =>{

    setTimeout(()=>{
      console.log("production has started")
      setTimeout(()=>{
        console.log("The fruit has been chopped")
        setTimeout(()=>{
          console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
          setTimeout(()=>{
            console.log("start the machine")
            setTimeout(()=>{
              console.log(`Ice cream placed on ${stocks.holder[1]}`)
              setTimeout(()=>{
                console.log(`${stocks.toppings[0]} as toppings`)
                setTimeout(()=>{
                  console.log("serve Ice cream")
                },2000)
              },3000)
            },2000)
          },1000)
        },1000)
      },2000)
    },0000)

  
  };   //Callback hell scenario


order(0, production);


//Promises were invented to solve the problem of callback hell and to better handle our tasks.

