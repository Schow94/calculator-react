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
  - This guy uses a lot of regex, so I'm going to need to brush up on that

6) Decided that the best approach for me right now is to use eval()
 - In order to do this I need a string ('5+4') => 9
 - I'm not sure how to get a string in this format
 - eval('5+4') doesn't work
7) Was able to write some string/math logic
  - Now just need to be able to incorporate this into my application
8) Having trouble performing the logic on an array. 
  -I'm thinking I can do str="" and then str + '1' => '1'
  - str + '+' => '1+'
  - str+'4' => '1+4'
  - str.eval() = '5'
  - OR maybe str1, str2, str3 and then eval(str1, str2, str3)??
  - Perhaps set up initial state as []


9) Been thinking. It might be good to have input and results as different pieces
  of state so we can see both as user types input or wants a calculation
    - Right now everything is counted as input

  // strip anything other than digits, (), -+/* and .
var str = "12/5*9+9.4*2".replace(/[^-()\d/*+.]/g, '');
alert(eval(str));


10) Got addition and subtraction to work. Division and multiplication don't work
  because the proper signs that work with eval() are * and / so I'll need to use
  regex or something to replace x and ÷ 
  - Actually not sure why '56+4' => 60. I thought eval() would only work to the
    ones place, not to the tens, hundreds, etc place - I guess eval() is just
    that intelligent and can differentiate
  - I think I'll need to add some code that filters the string before eval()

11) Getting stuck trying to sanitize/clean up input with regex/replace before
  it's passed to the equals fxn
  - For a split second I'm seeing 9*8 on the screen before the app crashes,
    console isn't updating this change though, only the UI is rendering the change
  - Finally got multiplication/division to work
    - I pulled logic out of clean() and put directly into equals() fxn
    - Next step would be to figure out how to pull it back out and put it into 
      a separate fxn so mode code is neater and easier to READ

12) Got all operators set up except for +/-
  - I'm thinking for +/- I can figure if its + or - and use and if/else statement 
    to set it to whatever it is not
  - Got % set up which just divides by 100, but there's no limit on the decimals 
    displayed
    - However input display is not updating because of all the decimals so that 
      calc goes out to 7.0000000000 for example
      - iPhone calculator displays up to 8 decimal places
      - Since input is just a string, I think I can use regex or something to limit
        how many string characters are displayed
        
14) Can limit # of #'s displayed
  - Now to convert 7.00000000000 to 7 - Going to be tricky
      - How to diffferentiate when a number ends in 0
      - if # ends in a 0, remove that 0
          - If display is a string, do string matching and remove that string 
            character if it's a 0
          - At the moment, it's not working for all scenarios. It's returning undefined
          - Also doesn't remove decimals "11.0" => "11."
          - Need to figure out where to put this fxn, because it won't allow me
            to do 7 x 100. It removes the last 2 zeros from the display. Might
            need to create a this.state.result which is different from input
13) Hitting = crashes the app if there's no input
  - I need more fxns checking inputs before they're passed into eval()
