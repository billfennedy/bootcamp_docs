var todos = []; //empty array.

var input = prompt("Welcome to Todo");

function list() {
  console.log("* - - - - - *");
  todos.forEach(function(asd){
    console.log(asd);
  })
  console.log("* - - - - - *");;
}

while (input !== "quit"){
  if (input === "list") {
    console.log("* - - - - - *");
    console.log("Total of " + todos.length + " todos" );
    todos.forEach(function(todo){
      console.log(todo);
    });
    console.log("* - - - - - *")
  } else if (input === "new") {
    var newTodo_1 = prompt("what is your Todo??")
    var newTodo = (todos.length+1) + '. ' + newTodo_1;
    todos.push(newTodo);
    alert("added Todo");
  } else if (input === "delete") {
    var deleteIndex = prompt("Enter the index of Todo")
    todos.splice(deleteIndex-1,1);
    alert("deleted Todo");
  }
  input = prompt("What would u like to do?");
}

console.log("ok u quit the app :)");
