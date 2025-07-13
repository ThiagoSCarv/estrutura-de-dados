function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(12))

/*function fibonacciMemoization(n) {
  const memo = [0, 1]
  const fibonacciMemo = (n) => {
    if (memo[n] != null) return memo[n]
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    return (memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo))
  }
  return fibonacci
}

console.log(fibonacciMemoization(5))*/
