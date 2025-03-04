// 1번
const myFirstPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
  });
  
  // 아래 코드는 수정하지 마세요.
  myFirstPromise.then(message => {
    console.log(message);
  });


// 2번
  async function waitForMessage() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello, Async/Await!");
            resolve();  
        }, 1000);
    });
}

waitForMessage();
