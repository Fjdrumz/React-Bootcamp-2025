try {
    
    let result = undefinedFunction();  
    console.log(result);
} catch (error) {
    
    console.error('An error occurred: ' + error.message);
}
