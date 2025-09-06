let salesData = [
    { product: "Laptop", price: 1200},
    { product: "Smartphone", price: 800},
    { product: "Headphone", price: 150},
    { product: "Keyboard", price: 80},
]

let initialValue = 0
let totalSales = salesData.reduce((acc,sale)=> acc+sale.price,initialValue);

console.log(totalSales);


let inventory = [
    { name: "Widget A", stock: 30},
    { name: "Widget B", stock: 120},
    { name: "Widget C", stock: 45},
    { name: "Widget D", stock: 70},
]

let lowStockItem =  inventory.filter((item)=> {return item.stock < 50})

console.log(lowStockItem);

let userAcitivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 72 },
    { user: "Charlie", activityCount: 33 },
]
//find most active use
let mostActiveUser = userAcitivity.reduce((maxUser,user)=>
    user.activityCount > maxUser.activityCount ? user : maxUser
)

console.log(mostActiveUser);


let expenses = [
    { description: "Groceries", amount: 50, category: "Food"},
    { description: "Electricity Bill", amount: 100, category: "Utitlies"},
    { description: "Dinner", amount: 30, category: "Food"},
    { description: "Internet Bill", amount: 50, category: "Utitlies"},
]

let expenseReport = expenses.reduce((report,expense)=> {
     report[expense.category] += expense.amount;
    //  report[expense.category] = (report[expense.category] || 0) + expense.amount;
     return report
},{Food:0, Utitlies:0})

console.log("Expense Report", expenseReport);


let tasks = [
    { description: "Write report", completed: false, priority: 2},
    { description: "Send email", completed: true, priority: 3},
    { description: "Prepare presentation", completed: false, priority: 1},
]

let pendingSortedTasks = tasks
.filter((task)=> !task.completed)
.sort((a,b)=> a.priority-b.priority)

console.log(pendingSortedTasks);


let movieRatings = [
    { title: "Movie A", ratings: [4,5,3]},
    { title: "Movie B", ratings: [5,5,4]},
    { title: "Movie C", ratings: [3,4,2]},
]

let averageRatings = movieRatings.map((movie) => {
    let total = movie.ratings.reduce((sum, rating)=> sum + rating, 0);
    let average = total / movie.ratings.length;
    // movie.ratings = average;
    // return movie;
    return { title: movie.title, averageRatings: average.toFixed(2) }
});


console.log(averageRatings);
 

