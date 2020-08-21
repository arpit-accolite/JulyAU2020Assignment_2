package com.accolite.calculate.implementations;

import com.accolite.calculate.interfaces.Calculator;


import java.util.InputMismatchException;


public class MyCalculator implements Calculator {


    @Override
    public int performcalculation(int a, int b, char c)  {
        if(c=='+'){
            return a+b;
        }
        else if(c=='-'){
            return a-b;
        }
        else if(c=='/'){

            return a/b;
        }
        else if(c=='*'){
            return a*b;
        }
        else{
            return a%b;
        }
    }
}
