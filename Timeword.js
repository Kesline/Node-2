function timeToWords(time) {
    const hours = parseInt(time.substr(0, 2));
    const minutes = parseInt(time.substr(3, 2));
  
    const hoursInWords = [
      "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "noon"
    ];
    const minutesInWords = [
      "oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    
    // Handle special cases: noon and midnight
    if (hours === 0 && minutes === 0) {
      return "midnight";
    } else if (hours === 12 && minutes === 0) {
      return "noon";
    }
  
    // Determine am/pm
    const period = hours < 12 ? "am" : "pm";
  
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;
  
    // Convert minutes to words
    let minutesText = "";
    if (minutes > 0) {
      if (minutes < 20) {
        minutesText = minutesInWords[minutes];
      } else {
        minutesText = `twenty ${minutesInWords[minutes % 10]}`;
      }
    }
  
    // Construct the final time in words
    const timeInWords = `${formattedHours} ${minutesText} ${period}`;
  
    return timeInWords.trim();
  }
  
  // Test cases
  const testCases = [
    { input: "00:00", expected: "midnight" },
    { input: "00:12", expected: "twelve twelve am" },
    { input: "01:00", expected: "one o'clock am" },
    { input: "06:01", expected: "six oh one am" },
    { input: "06:10", expected: "six ten am" },
    { input: "06:18", expected: "six eighteen am" },
    { input: "06:30", expected: "six thirty am" },
    { input: "10:34", expected: "ten thirty four am" },
    { input: "12:00", expected: "noon" },
    { input: "12:09", expected: "twelve oh nine pm" },
    { input: "23:23", expected: "eleven twenty three pm" },
  ];
  
  // Run tests
  testCases.forEach((testCase, index) => {
    const result = timeToWords(testCase.input);
    const pass = result === testCase.expected;
    console.log(`Test ${index + 1}: ${pass ? "Passed" : "Failed"}`);
    console.log(`  Input: ${testCase.input}`);
    console.log(`  Expected: ${testCase.expected}`);
    console.log(`  Result: ${result}`);
    console.log("\n");
  });
  