// #! usr/bin/env node
// import inquirer from "inquirer";
// interface TodoItem {
// task: string;
// completed: boolean;
// }
// let todo: TodoItem[] = [];
// async function mainMenu() {
// const { action } = await inquirer.prompt({
// type: "list",
// name: "action",
// message: "What would you like to do?",
// choices: ["Add Task", "View List", "Mark as completed", "Exit", "Delete"],
// });
// switch (action) {
// case "Add Task":
// await addTask();
// break;
// case "View List":
// viewList();
// break;
// case "Mark as completed":
// markAsCompleted();
// break;
// case "Exit":
// console.log("**GoodBye! Have a nice day.");
// break;
// case "Delete":
// await deleteTask();
// break;
// default:
// console.log("Invalid choice. Please select a valid option.");
// break;
// }
// mainMenu();
// }
// async function addTask() {
// const { task } = await inquirer.prompt({
// type: "input",
// name: "task",
// message: "What would you like to do?",
// })
// todo.push({ task, completed: false });
// console.log("Task Added Successfully.", todo);
// };
// function viewList() {
// console.log("****TO DO LIST***");
// todo.forEach((item, idx) => {
// console.log(`${idx + 1}.[${item.completed ? "x" : ""}]: ${item.task}`);
// console.log("**********");
// })
// };
// async function markAsCompleted() {
// const { index } = await inquirer.prompt({
// type: "number",
// name: "index",
// message: "Which task do you want to mark as completed?",
// });
// if (index < 1 || index > todo.length) {
// console.log("Invalid Task*****");
// return;
// }
// todo[index - 1].completed = true;
// console.log("Task marked as completed.");
// };
// async function deleteTask() {
// const { index } = await inquirer.prompt({
// type: "number",
// name: "index",
// message: "Which task do you want to delete?",
// })
// if (index < 1 || index > todo.length) {
// console.log("Invalid Task*****");
// return;
// }
// todo.splice(index - 1, 1);
// console.log("Task deleted successfully.");
// };
// mainMenu();
import inquirer from "inquirer";
let todo = [];
async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["Add Task", "View List", "Mark as completed", "Exit", "Delete"],
    });
    switch (action) {
        case "Add Task":
            await addTask();
            break;
        case "View List":
            viewList();
            break;
        case "Mark as completed":
            markAsCompleted();
            break;
        case "Exit":
            console.log("**GoodBye! Have a nice day.");
            break; // Closing curly brace here
        case "Delete":
            await deleteTask();
            break;
        default:
            console.log("Invalid choice. Please select a valid option.");
            break;
    }
    mainMenu(); // Call to itself at the end
}
async function addTask() {
    const { task } = await inquirer.prompt({
        type: "input",
        name: "task",
        message: "What would you like to do?",
    });
    todo.push({ task, completed: false });
    console.log("Task Added Successfully.", todo);
}
function viewList() {
    console.log("****TO DO LIST***");
    todo.forEach((item, idx) => {
        console.log(`${idx + 1}.[${item.completed ? "x" : ""}]: ${item.task}`);
        console.log("**********");
    });
}
async function markAsCompleted() {
    const { index } = await inquirer.prompt({
        type: "number",
        name: "index",
        message: "Which task do you want to mark as completed?",
    });
    if (index < 1 || index > todo.length) {
        console.log("Invalid Task*****");
        return;
    }
    todo[index - 1].completed = true;
    console.log("Task marked as completed.");
}
async function deleteTask() {
    const { index } = await inquirer.prompt({
        type: "number",
        name: "index",
        message: "Which task do you want to delete?",
    });
    if (index < 1 || index > todo.length) {
        console.log("Invalid Task*****");
        return;
    }
    todo.splice(index - 1, 1);
    console.log("Task deleted successfully.");
}
mainMenu(); // Initial call to start the program
