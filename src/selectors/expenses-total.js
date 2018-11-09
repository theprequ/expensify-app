// CHALLENGE IN SECTION 13 LECTURE 139

// BELOW IS MY OWN CODE
// export default (expenses) => {
//     if (Array.isArray(expenses)) {
//         if (expenses.length === 0) {
//             return 0;
//         } else {
//             return expenses.map((expense) => expense.amount)
//                .reduce((acc, cur) => acc + cur);
//         }
//     } else if (typeof expenses === "object") {
//         return expenses.amount;
//     } else if (!expenses) {
//         return 0;
//     }
// };

//BELOW IS ANDREW'S CODE
export default (expenses) => {
    return expenses
            .map((expense) => expense.amount)
            .reduce((acc, cur) => acc + cur , 0);
};

// ^^ 0 inside reduce means where which is the starting value of the function