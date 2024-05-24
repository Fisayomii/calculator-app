
export const evaluateExpression = (expression) => {
    try {
      // To handle percentages
        expression = expression.replace(/(\d+(\.\d+)?)%/g, (_, p1) => (parseFloat(p1) / 100).toString());
      // Split the expression into operators and numbers
      const operators = expression.split(/[\d.]+/).filter(op => op);
      const numbers = expression.split(/[^.\d]/).filter(num => num).map(num => parseFloat(num));
  
      // Ensure that the number of operators is one less than the number of numbers
      if (operators.length !== numbers.length - 1) {
        return 'Error';
      }
  
      // Initialize the result with the first number
      let result = numbers[0];
      
      // Loop through the operators and corresponding numbers to perform the calculations
      for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
          case '+':
            result += numbers[i + 1];
            break;
          case '-':
            result -= numbers[i + 1];
            break;
          case '*':
            result *= numbers[i + 1];
            break;
          case '/':
            if (numbers[i + 1] === 0) {
              return 'Error'; // Handle division by zero
            }
            result /= numbers[i + 1];
            break;
        //   case '%':
        //     result = result * (numbers[i + 1] / 100);
        //     break;
          default:
            return 'Error'; // Handle unexpected operators
        }
      }
  
      // Return the result as a string
      return result.toString();
    } catch (error) {
      // Return 'Error' if there is any issue with evaluation
      return 'Error';
    }
  };
  