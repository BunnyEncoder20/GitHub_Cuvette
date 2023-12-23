import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Class2 {
    public static void main(String[] args) {
        // Arrays in Java

        // 1. Declaration with fixed size > type[] arrayName = new type[size] ;
        int[] array1 = new int[5] ;

        // 2. Declaration with Initialization > type[] arr = {...elements}
        int[] array2 = {1,2,3,4,5} ;

        // 3. Declaration without Initialization (Later Assignment)
        int[] array3 ;
        array3 = new int[]{1,2,3,4,5} ;

        // 4.  Multi-dimensional Arrays:
        int[][] array4 = new int[5][5] ;

        // 5. Dynamic array 
        ArrayList<Integer> array5 = new ArrayList<>() ; 


        // Methods in arrays (methods of java.utils.Array)
        // 1. sorting 
        Arrays.sort(array4);

        // 2. Searching 
        // .binarySearch(T[] a, T key)
        // .binarySearch(T[] a, int fromIndex, int toIndex, T key)
        int index = Arrays.binarySearch(array2, 3);

        // 3. Filling 
        // Assigns the specified value to each element of the specified array.
        // .fill(T[] a, int fromIndex, int toIndex, T val) - fromIndex & toIndex are optional
        Arrays.fill(array3,0);

        // 4. Equality testing 
        // .equals(T[] a, T[] a2)
        Arrays.equals(array1,array2);

        // 5. Converting to String (User readable format)
        // toString(T[] a): Returns a string representation of the contents of the specified array.
        Arrays.toString(array4);

        // 6. Array Copying 
        // System.arraycopy(source array, source index, destination array, destination index, length to be copied) 
        // System.arraycopy(array1,0, array2,array1.length, array1.length);

        // 7. converting the array to a List 
        // .asList(array)   (PS: be careful of the data types)
        Integer[] IntArr = {1,2,3,4,5} ;
        List<Integer> list = Arrays.asList(IntArr);





        // LeetCode Questions : 

        int[] nums ={1,2,3,4,5,6,7} ;
        rotate(nums, 3);
    }
    public static void rotate(int[] nums, int k) {
        System.out.println("nums = "+nums.length);
        int[] subarray1 = new int[nums.length-k];
        System.out.println("subarrray1 = "+subarray1.length);
        int[] subarray2 = new int[k];
        System.out.println("subarrray2 = "+subarray2.length);
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i < nums.length - k){
                subarray1[i] = nums[j];
                System.out.println(nums[j]);
            }
            else{
                subarray2[i - (nums.length - k)] = nums[j];
                System.out.println(nums[j]);
            }
                
            j++;
        }
        System.out.println(Arrays.toString(subarray1));
        System.out.println(Arrays.toString(subarray2));
        reverse(subarray1);
        reverse(subarray2);
        System.out.println(Arrays.toString(subarray1));
        System.out.println(Arrays.toString(subarray2));
        int[] rotatedarray = new int[subarray1.length+subarray2.length];
        System.arraycopy(subarray1,0,rotatedarray,0,subarray1.length);
        System.arraycopy(subarray2,0,rotatedarray,subarray1.length,subarray2.length);
        reverse(rotatedarray);

        System.out.println(rotatedarray);
    }

    public static void reverse(int[] nums) {
        int i = 0, j = nums.length - 1;
        while (i < j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            i++;
            j--;
        }
    }
}

