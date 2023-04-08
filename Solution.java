
import java.util.stream.IntStream;

public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int maximumCostSubstring(String input, String chars, int[] values) {
        int[] costForChar = IntStream.rangeClosed(1, ALPHABET_SIZE).toArray();
        for (int i = 0; i < chars.length(); ++i) {
            costForChar[chars.charAt(i) - 'a'] = values[i];
        }

        int maxCost = 0;
        int currentCost = 0;
        for (int i = 0; i < input.length(); ++i) {
            currentCost = Math.max(0, currentCost + costForChar[input.charAt(i) - 'a']);
            maxCost = Math.max(maxCost, currentCost);
        }
        return maxCost;
    }
}
