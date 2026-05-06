function calculateExpression(input) {
  try {
    // Normalize symbols
    input = input.replace(/×/g, "*");
    input = input.replace(/÷/g, "/");
    input = input.replace(/\^/g, "**");

    // Basic safety cleanup
    input = input.replace(/[^0-9+\-*/().** ]/g, "");

    // Evaluate safely
    return Function("return " + input)();
  } catch (e) {
    return "Cannot solve expression";
  }
}
