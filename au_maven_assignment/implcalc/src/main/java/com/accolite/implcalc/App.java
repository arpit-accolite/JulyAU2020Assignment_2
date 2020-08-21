package com.accolite.implcalc;

import com.accolite.calculate.implementations.MyCalculator;
import com.accolite.calculate.interfaces.Calculator;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args ) {
        Calculator c= new MyCalculator();
        System.out.println(c.performcalculation(1,2,'+'));
        System.out.println(c.performcalculation(1,2,'-'));
        System.out.println(c.performcalculation(10,2,'/'));
        System.out.println(c.performcalculation(11,2,'*'));
        System.out.println(c.performcalculation(1201,2,'%'));
    }

}
