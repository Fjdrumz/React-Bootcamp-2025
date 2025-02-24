const objectAdvancedFunction = `
Advanced JavaScript Object Methods

1. Object.freeze(obj)

Purpose: Makes an object completely immutable.

Effects:

Prevents adding new properties.

Prevents modifying existing properties.

Prevents deleting properties.

Prevents changing property descriptors.

Example:

const obj = { name: "Alice" };
Object.freeze(obj);
obj.name = "Bob";  // No effect (in strict mode, throws an error)
obj.age = 25;       // No effect
delete obj.name;    // No effect
console.log(obj);   // { name: "Alice" }

2. Object.seal(obj)

Purpose: Prevents addition and deletion of properties but allows modification of existing ones.

Effects:

Cannot add new properties.

Cannot delete existing properties.

Can modify existing property values.

Example:

const obj = { name: "Alice" };
Object.seal(obj);
obj.name = "Bob";  // Allowed
obj.age = 25;       // No effect
delete obj.name;    // No effect
console.log(obj);   // { name: "Bob" }

3. Object.preventExtensions(obj)

Purpose: Prevents adding new properties to an object but allows modification and deletion of existing ones.

Effects:

Cannot add new properties.

Can modify existing properties.

Can delete existing properties.

Example:

const obj = { name: "Alice" };
Object.preventExtensions(obj);
obj.name = "Bob";  // Allowed
obj.age = 25;       // No effect
delete obj.name;    // Allowed
console.log(obj);   // {}

4. Object.isFrozen(obj)

Purpose: Checks if an object is frozen.

Example:

const obj = { name: "Alice" };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true

5. Object.isSealed(obj)

Purpose: Checks if an object is sealed.

Example:

const obj = { name: "Alice" };
Object.seal(obj);
console.log(Object.isSealed(obj)); // true

6. Object.isExtensible(obj)

Purpose: Checks if new properties can be added to an object.

Example:

const obj = { name: "Alice" };
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false

Summary Table

Method

Can Add Properties?

Can Modify Properties?

Can Delete Properties?

Object.freeze(obj)

❌ No

❌ No

❌ No

Object.seal(obj)

❌ No

✅ Yes

❌ No

Object.preventExtensions(obj)

❌ No

✅ Yes

✅ Yes

These methods help in defining strict rules for object manipulation, ensuring data integrity in JavaScript applications.
`