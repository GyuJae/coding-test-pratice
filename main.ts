function checkValidString(s: string): boolean {
  const stack = [];
  const table: any = {};
  table["]"] = "[";
  table["}"] = "{";
  table[")"] = "(";
  for (const i of s) {
    if (!table.hasOwnProperty(i)) {
      if ("({[".includes(i)) {
        stack.push(i);
      }
    } else if (stack.length !== 0 && table[i] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

const input_list = ["()", "(*)", "(*))"];

input_list.forEach((input) => {
  console.log(checkValidString(input));
});
