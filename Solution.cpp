
#include <array>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    
    static const int ALPHABET_SIZE = 26;
    
public:
    int maximumCostSubstring(const string& input, const string& chars, const vector<int>& values) const {
        array<int, ALPHABET_SIZE> costForChar;
        iota(costForChar.begin(), costForChar.end(), 1);
        for (int i = 0; i < chars.length(); ++i) {
            costForChar[chars[i] - 'a'] = values[i];
        }

        int maxCost = 0;
        int currentCost = 0;
        for (const auto& letter : input) {
            currentCost = max(0, currentCost + costForChar[letter - 'a']);
            maxCost = max(maxCost, currentCost);
        }
        return maxCost;
    }
};
