// Function 1: sumOfArray
function sumOfArray(arr) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce(
    (sum, val) => (typeof val === "number" ? sum + val : sum),
    0
  );
}

// Function 2: reverseString
function reverseString(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

// Function 3: isPalindrome
function isPalindrome(str) {
  if (typeof str !== "string") return false;
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

// Function 4: purgeDuplicates
function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

// --- Test Framework ---
function test(name, actual, expected) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${pass ? "✅ PASS" : "❌ FAIL"} - ${name}`);
  if (!pass) {
    console.log(`   Expected: ${JSON.stringify(expected)}`);
    console.log(`   Received: ${JSON.stringify(actual)}`);
  }
}

// --- Tests ---

// sumOfArray tests
test("sumOfArray basic", sumOfArray([1, 2, 3]), 6);
test("sumOfArray with negatives", sumOfArray([-1, -2, 3]), 0);
test("sumOfArray with non-numbers", sumOfArray([1, "2", 3]), 4);
test("sumOfArray with empty array", sumOfArray([]), 0);
test("sumOfArray with null", sumOfArray(null), 0);

// reverseString tests
test("reverseString basic", reverseString("hello"), "olleh");
test("reverseString with punctuation", reverseString("!hi?"), "?ih!");
test("reverseString empty string", reverseString(""), "");
test("reverseString with number input", reverseString(12345), "");
test("reverseString with null", reverseString(null), "");

// isPalindrome tests
test("isPalindrome basic true", isPalindrome("racecar"), true);
test("isPalindrome case insensitive", isPalindrome("RaceCar"), true);
test(
  "isPalindrome with punctuation",
  isPalindrome("A man, a plan, a canal: Panama"),
  true
);
test("isPalindrome false case", isPalindrome("hello"), false);
test("isPalindrome with number", isPalindrome(12321), false);
test("isPalindrome with null", isPalindrome(null), false);

// purgeDuplicates tests
test("purgeDuplicates numbers", purgeDuplicates([1, 2, 2, 3]), [1, 2, 3]);
test("purgeDuplicates strings", purgeDuplicates(["a", "b", "a"]), ["a", "b"]);
test("purgeDuplicates mixed types", purgeDuplicates([1, "1", 1]), [1, "1"]);
test("purgeDuplicates empty array", purgeDuplicates([]), []);
test("purgeDuplicates with null", purgeDuplicates(null), []);
