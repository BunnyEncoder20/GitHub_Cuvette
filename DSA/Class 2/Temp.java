public class Temp {
    public static void main(String[] args) {
        int goal = 10;
        int small = 4 ;
        int big = 1 ;

        int maxBig = goal / 5 ; 
        System.out.println(maxBig);
            
        if(maxBig<big)
          goal -= maxBig*5 ;
        else 
          goal -= big*5 ;
        
        System.out.println("after big , goal = "+goal);
        
        if(small >= goal)
          System.out.println(goal);
        else 
          System.out.println("-1");
    }
}