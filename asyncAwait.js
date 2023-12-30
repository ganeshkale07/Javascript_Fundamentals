const p1 = new Promise((res, rej) => {
  /***SetTimeout will start in webAPI as soon as it is assign it won't wait */
  setTimeout(() => {
    aa.push(22);
    res("p1 resolved");
  }, 5000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("error");
  }, 300);
});
let aa = [];
async function foo() {
  try {
    console.log("Hello");
    const a = await p1;
    //a contain results return by resolve()
    console.log(aa);
    const b = await p2;
    console.log(aa);
    //a contain results return by resolve()
    console.log(b);
  } catch (error) {
    console.log(error);
  }
}

foo();
//error handling traditional way for async and await
//we can use catch() because async fn return us promise
//foo().catch((error) => console.log(error));
