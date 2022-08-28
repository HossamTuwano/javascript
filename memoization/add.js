// a simple add function
const add = (n) => n + 10;
console.log(add(9));

// a memoized add function

const memoizedAdd = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating results");
      let results = n + 10;
      cache[n] = results;
      return results;
    }
  };
};

// returned function from memoized

const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(9));
