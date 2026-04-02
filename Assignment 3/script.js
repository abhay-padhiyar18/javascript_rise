// 1. Employee Salary Processor
// const Employee = [
//     { name: 'Abhay', salary: 41000 },
//     { name: 'Happy', salary: 75000 },
//     { name: 'Neel', salary: 10000 },
// ];

// const filteredEmployees = Employee.filter(
//     (employee) => employee.salary > 40000,
// );

// const increasedSalary = filteredEmployees.map((employee) => {
//     const incrementedSalary = employee.salary * 0.1;
//     const finalSalary = employee.salary + incrementedSalary;
//     return { ...employee, finalSalary };
// });

// const employeeLevel = increasedSalary.map((employee) => {
//     let level;
//     if (employee.finalSalary >= 70000) {
//         level = 'Senior';
//     } else {
//         level = 'Mid';
//     }

//     return { ...employee, level };
// });

// console.log(employeeLevel);

// 2. Order Management System

const orders = [
  {
    orderId: 101,
    customerName: "Amit",
    items: [
      { itemName: "Tablet", quantity: 2, price: 15000 },
      { itemName: "Charger", quantity: 1, price: 800 },
    ],
  },
  {
    orderId: 102,
    customerName: "Riya",
    items: [
      { itemName: "Headphones", quantity: 1, price: 2500 },
      { itemName: "Smart Watch", quantity: 1, price: 7000 },
      { itemName: "Power Bank", quantity: 2, price: 1200 },
    ],
  },
  {
    orderId: 103,
    customerName: "Vikas",
    items: [
      { itemName: "Camera", quantity: 1, price: 55000 },
      { itemName: "Tripod", quantity: 1, price: 3000 },
    ],
  },
];
const result = orders.map((order) => {
  let totalAmount = 0;
  let totalQuantity = 0;

  order.items.forEach((item) => {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  return {
    orderId: order.orderId,
    totalAmount: totalAmount,
    totalQuantity: totalQuantity,
  };
});

console.log(result);
