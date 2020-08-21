package com.accolite.calculate;

import com.accolite.calculate.implementations.MyCalculator;
import com.accolite.calculate.interfaces.Calculator;

import java.util.InputMismatchException;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
       Calculator c= new MyCalculator();
        System.out.println( c.performcalculation(1,2,'+'));

        }
}
