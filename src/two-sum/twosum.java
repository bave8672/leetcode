import java.util.*;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> complements = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            final Integer complementIndex = complements.get(nums[i]);
            if (complementIndex != null) {
                return new int[] { complementIndex, i };
            }
            complements.put(target - nums[i], i);
        }
        throw new Error("No solution found");
    }
}