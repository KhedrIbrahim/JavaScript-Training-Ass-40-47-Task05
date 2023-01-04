let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
console.log(haystack.includes(needle));
console.log(haystack[haystack.indexOf("JS")] === needle);
console.log((haystack[haystack.indexOf("JS")].slice() === needle.slice()));


if (haystack.includes("Found")) {
    console.log("Found");
}else {
    console.log("\"Found\" Not Available")
}