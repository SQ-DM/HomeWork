"use strict";
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = prompt("Во сколько обойдется?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("Done!");
        appData.expenses[a] = b;
      } else {
        console.log("Not Done!");
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень дохода");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень дохода");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма процентов");
      let percent = +prompt("Каков процент?");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с вашего депозита" + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let c = prompt("Введите необязательную статью расходов", "");
      let d = prompt("Во сколько обойдеться?", "");
      if (
        typeof c === "string" &&
        typeof c != null &&
        typeof c != "" &&
        typeof d != null &&
        typeof d != "" &&
        c.length < 50
      ) {
        console.log("Done too!");
        appData.optionalExpenses[c] = d;
      } else {
        console.log("Not Done!");
        i = i--;
      }
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесет дополнительный доход ? (Перечислите через запятую)",
      ""
    );
    appData.income = items.split(", ");
    appData.income.push(prompt("Может что то еще?"));
    appData.income.sort();
    appData.income.forEach((items) =>
      console.log("Способы заработка: " + items)
    );
    if (
      typeof items === "string" &&
      typeof items != "" &&
      typeof items != null
    ) {
      console.log("chooseIncome done!");
    } else {
      console.log("chooseIncome not done!");
    }
  },
};

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " +
      key +
      " значение: " +
      appData[key]
  );
}

//-------Цикл While
// let i = 0;
// while (i < 2) {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   let b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("Done!");
//     appData.expenses[a] = b;
//   } else {
//     console.log("Not Done!");
//     i--;
//   }
//   i++;
// }
// appData.moneyPerDay = appData.budget / 30;

// ------Цикл Do While

// Цикл Do While

// let i = 0;
// do {
//   let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   let b = prompt("Во сколько обойдется?", "");

//   if (
//     typeof a === "string" &&
//     typeof a != null &&
//     typeof b != null &&
//     a != "" &&
//     b != "" &&
//     a.length < 50
//   ) {
//     console.log("Done!");
//     appData.expenses[a] = b;
//   } else {
//     console.log("Not Done!");
//     i--;
//   }
// } while (i < 2);
