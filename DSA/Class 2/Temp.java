public class Temp {
    public static void main(String[] args) {
        String str = "abcxx";
        for (int i=0;i<str.length()-1;i++){
            System.out.println(str.substring(i,i+2));
              System.out.println("i="+i+"\ni+2="+(i+2));
              System.out.println();
          }
    }
}