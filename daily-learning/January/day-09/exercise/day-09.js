const library = [
    {
      title: "things fall apart",
      author: "Chinua Achebe",
      available: true,
    },
    {
      title: "Half of a yellow sun",
      author: "Chimamanda Ngozi Adichie",
      available: true,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      available: true,
    },
  ];
  

  // 1. 
  library.push({
    title: "The Alchemist",
    author: "Paulo Coelho",
    available: true,
  });
  
  // 2. 
  const availableBooks = library.filter((book) => book.available);
  console.log("Available Books:", availableBooks);
  
  // 3.
  const foundBook = library.find((book) => book.title === "The Alchemist");
  console.log("Found Book:", foundBook);
  
  // 4. 
  if (foundBook) {
    foundBook.available = false; 
  }
  console.log("Updated Library:", library);
  
  // 5.
  const bookDescriptions = library.map(
    (book) => "${book.title} by ${book.author}"
  );
  console.log("Book Descriptions:", bookDescriptions);