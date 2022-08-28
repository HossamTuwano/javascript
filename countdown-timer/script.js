const newYears = "1st January 2022";

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  console.log(newYearsDate - currentDate);
}

countDown();
