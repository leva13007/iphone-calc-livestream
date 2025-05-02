const operators: Record<
  string,
  { priority: number; associativity: "L" | "R" }
> = {
  "-": { priority: 1, associativity: "L" },
  "+": { priority: 1, associativity: "L" },
  "*": { priority: 2, associativity: "L" },
  "/": { priority: 2, associativity: "L" },
  "^": { priority: 3, associativity: "R" },
};

const functions = ["sqrt"];

const toPostfix = (expression: string): string[] => {
  const output: string[] = [];
  const stack: string[] = [];

  const tokens = expression.match(/\d+(\.\d+)?|[-+*/()^]|\w+/g);
  console.log("tokens", tokens);
  if (!tokens) return [];

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      output.push(token);
    } else if (functions.includes(token)) {
      stack.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        output.push(stack.pop()!);
      }
      stack.pop(); // remove first '('
      if (stack.length && functions.includes(stack[stack.length - 1])) {
        output.push(stack.pop()!);
      }
    } else if (token in operators) {
      while (
        stack.length &&
        stack[stack.length - 1] in operators &&
        ((operators[token].associativity === "L" &&
            operators[stack[stack.length - 1]].priority >=
            operators[token].priority) ||
          (operators[token].associativity === "R" &&
            operators[stack[stack.length - 1]].priority >
            operators[token].priority))
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

const evaluate = (postfix: string[]): number => {
  const output: number[] = [];

  for (const token of postfix) {
    if (!isNaN(Number(token))) {
      output.push(+token);
    } else if (token === "sqrt") {
      const a = output.pop();
      if (a === undefined ) throw Error("Error 2");
      output.push(Math.sqrt(a));
    } else if (token in operators) {
      const b = output.pop();
      const a = output.pop();
      if (a === undefined || b === undefined) throw Error("Error 1");
      switch (token) {
        case "+":
          output.push(a + b);
          break;
        case "-":
          output.push(a - b);
          break;
        case "*":
          output.push(a * b);
          break;
        case "/":
          output.push(a / b);
          break;
        case "^":
          output.push(Math.pow(a, b));
          break;
        default:
          throw Error("Error unknown operator");
      }
    }
  }

  return output[0];
};

export const evaluatePostfix = (value: string): number => evaluate(toPostfix(value))