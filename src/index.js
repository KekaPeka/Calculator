class SmartCalculator 
{
  constructor(initialValue) 
  {
    this.initialValue = initialValue.toString();
  }


  add(number)
  {
    this.initialValue +=" + "+number;
     return this;
  }
  

  subtract(number) 
  {
    this.initialValue +=" - "+number; 
    return this;
  }


  multiply(number) 
  {
    this.initialValue +=" * "+number; 
    return this;
  }


  devide(number) 
  {
    this.initialValue +=" / "+number;
     return this;
  }


  pow(number) 
  {
    this.initialValue +=" ** "+number; 
    return this;
  }

  
  valueOf()
  {
    return eval(this.initialValue);
  }
}

module.exports = SmartCalculator;
