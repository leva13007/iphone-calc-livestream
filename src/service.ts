const operators: Record<string, { priority: number }> = {
  "-": { priority: 1 },
  "+": { priority: 1 },
  "*": { priority: 2 },
  "/": { priority: 2 },
};

const toPostfix = (expression: string): string[] => {
  const output: string[] = [];
  const stack: string[] = [];

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

const evaluate = (postfix: string[]): number => {
  const output: number[] = [];

  for(const token of postfix) {
    if (!isNaN(Number(token))) {
      output.push(+token);
    } else if (token in operators) {
      const b = output.pop();
      const a = output.pop();
      if (a === undefined || b === undefined) throw Error('Error 1');
      switch(token){
        case '+': output.push(a + b);break;
        case '-': output.push(a - b);break;
        case '*': output.push(a * b);break;
        case '/': output.push(a / b);break;
        default: throw Error('Error unknown operator');
      }
    }
  }

  return output[0];
}

export const evaluatePostfix = (value: string): number => evaluate(toPostfix(value))