//  1 Function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 2 Function to simulate fetching data
function fetchData() {
    return new Promise(async (resolve) => {
        await delay(2000); // 2 seconds delay
        const randomData = Math.floor(Math.random() * 100) + 1;
        console.log(`Fetched data: ${randomData}`);
        resolve(randomData);
    });
}

// 3 Function to simulate processing data
function processData(data) {
    return new Promise(async (resolve) => {
        await delay(1000); // 1 second delay
        const processedData = data * 2;
        console.log(`Processed data: ${processedData}`);
        resolve(processedData);
    });
}

// 4 Chaining the functions together
fetchData()
    .then(processData)
    .then(result => {
        console.log(`Final result: ${result}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
