const toPostfix = (expression: string): string[] => {
  const output: string[] = [];
  const stack: string[] = [];

  const operators: Record<string, { priority: number }> = {
    "-": { priority: 1 },
    "+": { priority: 1 },
    "*": { priority: 2 },
    "/": { priority: 2 },
  };

  const tokens = expression.match(/\d+(\.\d+)?|[-+*/]/g);
  console.log("tokens", tokens);
  if (!tokens) return [];

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      output.push(token);
    } else if (token in operators) {
      while (
        stack.length &&
        operators[stack[stack.length - 1]].priority >= operators[token].priority
        ) {
        output.push(stack.pop()!);
      }
      stack.push(token);
    }
  }

  console.log("output", output);
  console.log("stack", stack);

  while (stack.length) {
    output.push(stack.pop()!);
  }

  console.log("result", output);
  return output;
};