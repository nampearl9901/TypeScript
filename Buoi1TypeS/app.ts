console.log("hello");

// basic type

let username: string = "Alice";
username = "bob";
//username = 112; err

let userAge = 2;
//userAge="2"; err
let isHoliday: boolean;

isHoliday = true;
//isHoliday="yes"; err

let isMarried: null = null;
//isMarried = true;

let is_Married: undefined = undefined;
// console.log(isMarried);

// pass by reference object array

interface Todo {
  id: number;
  name: string;
  desc?: string; //optional property
}

interface NewToDo extends Todo {
  isComplete: boolean;
}

let todo1: Todo = {
  id: 1,
  name: "lau nhà",
  desc: "Vui quá",
};
let todo2: Todo = {
  id: 2,
  name: "rua chen",
};
let todo3: NewToDo = {
  id: 3,
  name: "lam bai tap",
  isComplete: false,
};
let color: Array<string> = ["red", "black"];

let todos: Todo[] = [
  {
    id: 1,
    name: "1",
  },
  {
    id: 2,
    name: "2",
    //isComplete:true,
  },
];

// union type: cho phep 1 bien chua nhieu loai kieu du lieu

type ResponseTodoDE = null | Todo;
// string number

type ResponseAgeBE = string | number;

let age1: ResponseAgeBE = 3;
age1 = "4";
//age1=true;

// enum type

enum GenderType {
  mail = 1,
  female = 0,
  other = 2,
}

interface SinhVien {
  id: string;
  name: string;
  gender: GenderType;
}

var sv1: SinhVien = {
  id: "111",
  name: "Alice",
  gender: GenderType.female,
};

interface Car {
  id: number;
  name: string;
  price: number;
  desc?: string;
}

/// Partial chuyen tu require thanh optinal
let introduceCar = (data: Partial<Car>) => {
  console.log("Thong tin xe");
  console.log(data.name);
};

introduceCar({
  id: 2,
  name: "VinFast VF7",
});

let car1: Required<Car> = {
  id: 2,
  price: 20,
  name: "Totota",
};
