import fs from 'fs';
import path from 'path';

const dist = path.join(process.cwd(), 'dist');
let stripped = 0;
let remaining = 0;

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) {
      let content = fs.readFileSync(full, 'utf8');
      const before = content;
      // Strip "TODO(owner): " prefix from text content and attributes
      content = content.replace(/TODO\(owner\): [^<"']*/g, '');
      // Also strip bare "TODO(owner):" with no following text
      content = content.replace(/TODO\(owner\):/g, '');
      if (content !== before) {
        fs.writeFileSync(full, content);
        stripped += (before.match(/TODO\(owner\)/g) || []).length;
      }
      const remainingMatches = content.match(/TODO\(owner\)/g);
      if (remainingMatches) {
        remaining += remainingMatches.length;
        console.error(`REMAINING TODO(owner) in ${path.relative(dist, full)} (${remainingMatches.length})`);
        remainingMatches.forEach((m) => console.error(`  ${m}`));
      }
    }
  }
}

walk(dist);

console.log(`Stripped ${stripped} TODO(owner) placeholder(s) from built HTML.`);

if (remaining > 0) {
  console.error(`BUILD FAILED: ${remaining} TODO(owner) placeholder(s) remain after stripping.`);
  process.exit(1);
} else {
  console.log('Build check passed: no TODO(owner) placeholders in rendered HTML.');
}
