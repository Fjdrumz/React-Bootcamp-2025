const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  const user = users.find(user => user.id === 2);
  console.log(user); // { id: 2, name: "Bob" }
  