try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log('An error occurred: ' + error.message);
}
