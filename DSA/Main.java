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
        
        int n = op.nextInt();
        int spaces=n/2;
        int stars = 1;
        
        for(int i=0; i<n; i++){
            for(int j=0;j<spaces;j++){
                System.out.print(" ");
            }
            for(int k=0;k<stars;k++){
                System.out.print("*");
            }
            System.out.println();
            if(i<n/2){
                spaces-=1;
                stars+=1;
            } else {
                spaces+=1;
                stars-=1;
            }
        }
        
        for(int i=0; i<n; i++){
            for(int j=0;j<spaces;j++){
                System.out.print(" ");
            }
            for(int k=0;k<stars;k++){
                System.out.print("*");
            }
            System.out.println();
            if(i<n/2){
                spaces-=1;
                stars+=2;
            } else {
                spaces+=1;
                stars-=2;
            }
        }

        op.close();
    }
}
