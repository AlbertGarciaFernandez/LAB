const fs = require("fs");
const path = require("path");

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file === "PageContent.tsx") {
      let content = fs.readFileSync(fullPath, "utf8");

      // Let's replace the glowColor="green" with glowColor="orange" for FAQ and Why Us.
      // A simple regex: replace the 2nd and 3rd occurrence of glowColor="green" with orange?
      // Actually, let's just replace all glowColor="green" with glowColor="orange" for the FAQ map
      content = content.replace(/t\.raw\("FAQ\.questions"\).*?glowColor="green"/gs, (match) =>
        match.replace('glowColor="green"', 'glowColor="orange"')
      );

      content = content.replace(/t\.raw\("WhyUs\.points"\).*?glowColor="green"/gs, (match) =>
        match.replace('glowColor="green"', 'glowColor="orange"')
      );

      content = content.replace(/t\.raw\("Features\.cards"\).*?glowColor="green"/gs, (match) =>
        match.replace('glowColor="green"', 'glowColor="orange"')
      );

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir("./app");
console.log("Done balancing colors");
