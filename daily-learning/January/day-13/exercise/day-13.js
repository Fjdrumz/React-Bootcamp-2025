// const courses = {
//     "Acc 419": "A",
//     "Acc 407": "B",
//     "Acc 410": "A-",
//     "Acc 406": "B+",
//     "Acc 423": "A",
//     "Acc 432": "B",
//     "Acc 401": "B-",
//     "Acc 403": "C+",
//     "Acc 404": "A+"
// };


// const courseNames = Object.keys(courses);

// for (let i = 0; i < courseNames.length; i++) {
//     const course = courseNames[i];
//     console.log(`Course: ${course}, Grade: ${courses[course]}`);
// }


// let totalCourses = 0; 
// let gradeACourses = 0; 
// let gradeBOrLowerCourses = 0;


// for (const course in courses) {
//     totalCourses++; 

//     const grade = courses[course];

//     if (grade === "A") {
//         gradeACourses++; 
//     }

    
//     if (["B", "B-", "C+", "C", "D", "F"].includes(grade)) {
//         gradeBOrLowerCourses++; 
//     }
// }

// // Step 3: Display the results
// console.log(`Total number of courses: ${totalCourses}`);
// console.log(`Number of courses with grade A: ${gradeACourses}`);
// console.log(`Number of courses with grade B or lower: ${gradeBOrLowerCourses}`);


// Plan to Improve Grades
// Courses to Improve:

// Acc 407 (Grade: B): Improve to "A" for a better GPA.
// Acc 401 (Grade: B-): Improve to "B" or higher for better understanding.
// Acc 403 (Grade: C+): Improve to "B" for a stronger grasp of the material.
// Action Plan:

// Study regularly and focus on weak areas.
// Seek help from tutors or study groups.
// Review past assessments and practice problems.
// Update Grades (after improvement):

// javascript
// Copy code
// courses["Acc 407"] = "A";
// courses["Acc 401"] = "B";
// courses["Acc 403"] = "B";

// // Adding a new course with a grade
// courses["Acc 408"] = "A-";
