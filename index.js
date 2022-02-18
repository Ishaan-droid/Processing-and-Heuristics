import twoSum from "./Questions/Easy/easy-1-TwoSum.js";
import isPalindrome from "./Questions/Easy/easy-2-Palindrome.js";
import isValid from "./Questions/Easy/easy-3-VaildParanthesis.js";
import maxNumberOfBalloons from "./Questions/Easy/easy-4-MaximumNumberOfBallons.js";
import removeDuplicates from "./Questions/Easy/easy-5-RemoveDuplicatesFromSortedArray.js";
import removeElement from "./Questions/Easy/easy-6-RemoveElement.js";
import isAnagram from "./Questions/Easy/easy-7-ValidAnagram.js";
import countUniqueValues from "./Questions/Easy/easy-8-countUniqueValues.js";
import averagePair from "./Questions/Easy/easy-9-AveragePair.js";
import isSubsequence from "./Questions/Easy/easy-10-isSubsequence.js";
import maxSubarraySum from "./Questions/Easy/easy-11-MaxSubArraySum.js";
import searchInsert from "./Questions/Easy/easy-14-SearchInsertPosition.js";
import fizzBuzz from "./Questions/Easy/easy-15-FizzBizz.js";
import lengthOfLastWord from "./Questions/Easy/easy-16-LengthOfLastWord.js";
import isPerfectSquare from "./Questions/Easy/easy-18-perfectSquare.js";

import * as easyRecursion from "./Questions/Easy/easy-12-recursion.js";
import * as mediumRecursion from "./Questions/Medium/medium-13-recursion.js";
import mySqrt from "./Questions/Easy/easy-17-sqrt.js";
import containsDuplicate from "./Questions/Easy/easy-19-containsDuplicate.js";
import containsNearbyDuplicate from "./Questions/Easy/easy-20-containsDuplicate2.js";
import productExceptSelf from "./Questions/Medium/medium-21-ProductofArrayExceptSelf.js";
import validMountainArray from "./Questions/Easy/easy-22-validMountainArray.js";
import maxProfit from "./Questions/Easy/easy-23-BuyAndSellStock.js";
import maximumDifference from "./Questions/Easy/easy-24-MaximumDifference.js";
import lengthOfLongestSubstring from "./Questions/Medium/medium-26-LongestSubstringWithoutRepeating.js";
import maxSubArray from "./Questions/Easy/easy-27-MaximumSubArray.js";
import findTheDifference from "./Questions/Easy/easy-28-FindTheDifference.js";
import singleNumber from "./Questions/Easy/easy-29-SingleNumber.js";
import missingNumber from "./Questions/Easy/easy-30-MissingNumber.js";
import findDuplicate from "./Questions/Medium/medium-31-FindDuplicate.js";
import findErrorNums from "./Questions/Easy/easy-32-setMismatch.js";
import merge from "./Questions/Easy/easy-33-MergeSortedArray.js";
import majorityElement from "./Questions/Easy/easy-34-MajorityElement.js";
import validPalindrome from "./Questions/Easy/easy-35-ValindPalindrome.js";
import firstPalindrome from "./Questions/Easy/easy-36-FirstPalindromicStringArray.js";
import capitalizeTitle from "./Questions/Easy/easy-37-CapitalizeTheTitle.js";
import searchRange from "./Questions/Medium/medium-38-FirstandLastPositionofElementinSortedArray.js";
import moveZeroes from "./Questions/Easy/easy-39-MoveZeroes.js";
import intersection from "./Questions/Easy/easy-40-IntersectionOfTwoArrays.js";
import countWords from "./Questions/Easy/easy-41-CountCommonWordsWithOneOccurence.js";

let answer;

// answer = twoSum([2, 7, 11, 15], 9);
// answer = isPalindrome(1221);
// answer = isValid("([){()}[]");
// answer = maxNumberOfBalloons("balon");
// answer = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// answer = removeElement([3, 2, 2, 3], 3);
// answer = isAnagram("a", "ab");
// answer = countUniqueValues([-2, -1, -1, 0, 1]);
// answer = averagePair([-1, 0, 3, 4, 5, 6], 2.5);
// answer = isSubsequence("hello", "hello world");
// answer = maxSubarraySum([2, 3], 3);
// answer = easyRecursion.power(2, 2);
// answer = easyRecursion.factorial(7);
// answer = easyRecursion.productOfArray([1, 2, 3, 10]);
// answer = easyRecursion.recursiveRange(6);
// answer = easyRecursion.fib(6);
// answer = mediumRecursion.reverse("awesome", 1);
// answer = searchInsert([1, 3, 5, 6], 5);
// answer = fizzBuzz(15);
// answer = lengthOfLastWord("Hello World");
// answer = mySqrt(25);
// answer = isPerfectSquare(16);
// answer = containsDuplicate([1, 2, 3, 1]);
// answer = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
// answer = productExceptSelf([1, 2, 3, 4]);
// answer = validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// answer = maxProfit([7, 1, 5, 3, 6, 4]);
// answer = maximumDifference([9, 4, 3, 2]);
// answer = lengthOfLongestSubstring("pwwkew");
// answer = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// answer = findTheDifference("", "y");
// answer = singleNumber([4, 1, 2, 1, 2]);
// answer = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
// answer = findDuplicate([3, 1, 3, 4, 2]);
// answer = findErrorNums([3, 2, 3, 4, 6, 5]);
// answer = merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3);
// answer = majorityElement([1]);
// answer = validPalindrome("A man, a plan, a canal: Panama");
// answer = firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
// answer = capitalizeTitle("L hV");
// answer = searchRange([5, 7, 7, 8, 8, 10], 8);
// answer = moveZeroes([0, 1, 0, 3, 12]);
// answer = intersection([4, 9, 5], [9, 4, 9, 8, 4]);

answer = countWords(
  [
    "ibxyatvglhltxngewrcrqbbnew",
    "towokpjpkccmob",
    "kdmtwngzpebwpnvlazhdcmtwpjh",
    "muh",
    "fzzlmacbbvoqdueutjqoutwd",
    "ylluspdftxxqbwadivfdzulghq",
    "hioiacezaiptpsvcojzckhxz",
    "nzcjhjomaupevyekennyrfwyd",
    "tdwtuinstwsfyjnfkxkbnsptisuifo",
    "wrdwoxzsczzlnwjugopohxh",
    "p",
    "jkez",
    "drisymx",
    "fsva",
    "myqc",
    "aovjoxzpkylpecltwtottzidq",
    "wqspbhpberqjabockesc",
    "f",
    "qostobxgfliil",
    "gsekmhjpuedeivioudx",
    "tzelzowtgnvjsxgbw",
    "zgmpazgnioprk",
    "fucybddarjcve",
    "ldacfviysy",
    "yxyjairoxtvbkljaokca",
    "vxpiohhvjuwcpiceafcdzobalgpz",
    "wyflbpmkfwftndgtnftajgla",
    "xbxvvk",
    "bnrwyshimjamltmlugeiviu",
    "wsgqysmuakedrrmjk",
    "ppqmgibqljkwgmiwi",
    "fly",
    "uf",
    "tvvttzrsjbojve",
    "ztxtnmljdhyz",
    "vxonvloufeksfvg",
    "wql",
    "kotdenqjrdlgofubocb",
    "wlaqceczd",
    "mtmhtgvqwr",
    "aymzxpfvbqxydmilafyqvapuxtnqe",
    "ig",
    "atetjlhdcigunmmit",
    "enkdcxqnw",
    "gtlcmkxwvdhumgfurxkesmekmnhjo",
    "hurihasxncgtzleerslvwxkz",
    "zked",
    "xiaqvclhuhggcgoouzjgi",
    "mzejuubgyhvlfbecpmggddby",
    "boyotuukuiprtlvktypxboosw",
    "vwfceei",
    "gopsxsihawzhtlmdyiggljzggrhqr",
    "bckuuqszgncdhkeghudflczm",
    "e",
    "yvhwysrunkxsppbqjf",
    "lo",
    "bze",
    "kuzoqvgugnrpfkelktfg",
    "ntjtlwwmuevtsqujpxswgx",
    "zkdwtpdlvrfkbyktqsellmghaxj",
    "u",
    "rpmpq",
    "ajhlzwfrbysqloduofr",
    "gyfmhcskcrjepgeplbbj",
    "fe",
    "zyolvtetrdffy",
    "apbkyczsuvde",
    "fnkqf",
    "qwwxpwbr",
    "krkbnww",
    "zkvqkugfpziawiokdzlpjomfarkor",
    "jg",
    "l",
    "srbvxsnuhyqzmycvavmmakh",
    "dhkgzjrstir",
    "smaaptkzpwhukebwboysbnawgzgot",
  ],
  [
    "p",
    "towokpjpkccmob",
    "vflbjyecpzxnuay",
    "fzas",
    "fzzlmacbbvoqdueutjqoutwd",
    "bwjjzw",
    "va",
    "manrvuldjzrdnwihzct",
    "tdwtuinstwsfyjnfkxkbnsptisuifo",
    "wrdwoxzsczzlnwjugopohxh",
    "p",
    "tylcyihdjruhaayzcwxrynnkch",
    "uojzddpgyvqslha",
    "fsva",
    "rucvbjzfewjlhddxefhf",
    "tfihr",
    "wqspbhpberqjabockesc",
    "f",
    "bmfo",
    "zsjbzjmbloaybdofsrqvzwoizz",
    "tzelzowtgnvjsxgbw",
    "tproznqma",
    "lmryjiyvkgsxsaylkdmmxeub",
    "ldacfviysy",
    "xpamoswlugwjxyny",
    "rmfvgm",
    "wm",
    "xbxvvk",
    "ubawz",
    "jbrabb",
    "rgegpb",
    "fly",
    "aofydpklgjqmxhvxuhq",
    "tvvttzrsjbojve",
    "wj",
    "vxonvloufeksfvg",
    "wql",
    "vu",
    "nhuxqdfyftrbbodztyydb",
    "mtmhtgvqwr",
    "aymzxpfvbqxydmilafyqvapuxtnqe",
    "fqksatpfo",
    "ylzkfvvzdsryl",
    "enkdcxqnw",
    "gtlcmkxwvdhumgfurxkesmekmnhjo",
    "nccwybkxuawwdqyhrhmbt",
    "zked",
    "eyzwtvsjt",
    "qy",
    "boyotuukuiprtlvktypxboosw",
  ]
);

console.log(answer);
