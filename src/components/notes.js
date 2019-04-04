1) figure out how to get certain buttons orange

2) Next step is figuring out calculation logic
 - Try to do simple addition first
 - Write some logic to differentiate btwn numbers and operators

- Getting NaN for this.addToInput for numbers
- Getting string returned for checkNum but NaN/undefined for addToInput
- symbols like % are not getting clicked
- AC is recognized as a num since returns 0

- Was able to get numbers recognized
 - Now, need to figure out how to get additon to work.

3) This Nitin Patel guy from Medium leaves everything as a string and uses the 
  eval() js fxn which apparently evaules math inside of strings so you don't
  need to convert. I'm going to see what the other people do now. 2nd guy, from
  youtube, also uses eval(). 3rd guy uses math.js which is why his code uses #s

4) For operators, need to prefine them all with if else if statements
  - Account for (+, - , /, x)
    <Button className="add">+</Button>
    - if (className === "add") { caclulator.dataset.operation = `${className}`}
    - if(operator === "add")
    - const firstNum = 
      const operator = 
      const secondNum = 
      // for this part, can either keep as a string with eval() or create a fxn
      // to evaluate 3 values(1stNum, operator, 2ndNum)
      const calculate = (firstNum, operator, secondNum) => {ca}
    - create 3 values(1st #, operator, 2nd #)


5) was looking at someone's react/redux code on github and they passed value=7
  as a prop. this might be the most intelligent way to do this - would prob be
  a # still if i do it this way.
  - The math logic seems to be the main thing stumping me now.
  - The newest math logic actually seems the best to me.
  - This guy uses a lot of regex, so I'm going to need to catch up on that

