// static void main must be included in a public class 
// package DSA;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        Scanner op = new Scanner(System.in);
        
        // int n = op.nextInt();
        // for (int i = 1; i <= n; i++) {
        //     for (int j = 1; j <= n; j++) {
        //         System.out.println(i + " " + j + "##");
        //     }
        //     System.out.println();
        // }
        
//         For Printing patterns problems, it is addviced to count the stars and spaces in the first row and 
//         use that info to make the patterns by printing the spaces and starts one after the other 

/*
 * Below COde can be found at : https://leetcode.com/playground/mPNe3sBc
 * Inputs for the below code lines : 
 20
bunny
soma
2100
97
5
5
7
7
10
5
5
5
10
 */
        
System.out.println("Hello World");
System.out.println(10);

// Utility utilityName = new Utility();
Scanner scn = new Scanner(System.in);
int x = scn.nextInt();

//         Note : Everything in JAva gets converted to String and hence everything is a string. hence the the scanner for string is just next()
String s = scn.next(); //bunny -> [b,u,n,n,y]
char ch = scn.next().charAt(0); // for character

// Printing the input values : 
System.out.println(x);
System.out.println(s);
System.out.println(ch);


// Conditional statements 
//      Conditional for leap year :
int year = scn.nextInt();

if((year%4==0 && year%100!=0) || year%400==0){
    System.out.println("it is a leap year");
}
else{
    System.out.println("It is not a leap year");
}


//         Loops in Java 
int idx=1;

System.out.println("While loop");
while(idx<=5){
    System.out.println(5+" x "+idx+" = "+5*idx);
    idx++;
}

System.out.println("For loop");
for(int i=1;i<6;i++)
    System.out.println(5+" x "+i+" = "+5*i);

System.out.println("Prime Number detection");
int n = scn.nextInt();
boolean flag = true;
for(int i=2;i<n/2;i++){
    if(n%i==0){
        System.out.println("Not a prime number");
        //return ;    // return keyword ends the entire function so this will make the static void main function stop and exit the function.
        flag = false;
        break;
    }
}
if(flag)
    System.out.println("It is a prime number !");


//         Star Pattern Problems 
//         1. Triangle 
System.out.println("Triangle");
int row = scn.nextInt(); // number of rows 
int sp = 0; int st = 1; // number of spaces and stars
for(int i=0;i<row;i++){
    for(int j=0;j<st;j++){
        System.out.print("*");
    }
    System.out.println("");
    st++;
}

//         2. Inverted Triangle 
System.out.println("Inverted Triangle");
row = scn.nextInt();
sp=0; st=row;
for(int i=0;i<row;i++){
    for(int j=0;j<st;j++){
        System.out.print("*");
    }
    System.out.println("");
    st--;
}

//         3. Triangle (RHS)
System.out.println("Triangle - RHS");
row = scn.nextInt();
sp=row-1; st = 1;
for(int i=0;i<row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    System.out.println("");
    sp--; st++;
}

//         4. Inverted Triangle (RHS)
System.out.println("Inverted Triangle - RHS");
row=scn.nextInt();
sp = 0; st = row;
for(int i=0;i<row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    System.out.println("");
    sp++; st--;
}

//         5. Half Diamond (When doing diamonds use conditions in the end)
System.out.println("Half Diamond");
row = scn.nextInt();
sp = row-1; st = 1;
for(int i=0;i<=row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    System.out.println("");
    
    if(i<row/2){
        sp--; st++;
    }
    else{
        sp++; st--;
    }
}

//         6. Full Diamond 
System.out.println("Full Diamond");
row = scn.nextInt();
sp = row-1; st = 1;
for(int i=0;i<=row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    System.out.println("");
    
    if(i<row/2){
        sp--; st+=2;
    }
    else{
        sp++; st-=2;
    }
}

//         7. Pyramid
System.out.println("Pyramid");
row = scn.nextInt();
sp = row-1; st = 1;
for(int i=0;i<row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    
    System.out.println("");
    st+=2; sp--;
}

//         8. Inverted Pyramid 
System.out.println("Inverted Pyramid");
row = scn.nextInt();
sp = 0; st=2*row-1;
for(int i=0;i<row;i++){
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++)
        System.out.print("*");
    
    System.out.println("");
    st-=2; sp++;
}

//         9. Numbers pyramid 
System.out.println("Number Pyramid");
row = scn.nextInt();
sp = row-1; st = 1;
for(int i=0;i<=row;i++){
    int val=1;
    for(int j=0;j<sp;j++)
        System.out.print(" ");
    for(int j=0;j<st;j++){
        if(j<st/2){
            System.out.print(val); val++;
        }
        else {
            System.out.print(val); val--;
        }
    }
        
    System.out.println("");
    
    if(i<row/2){
        sp--; st+=2;
    }
    else{
        sp++; st-=2;
    }
}

        op.close();
    }
}
