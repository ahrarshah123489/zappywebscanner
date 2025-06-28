const output = document.getElementById("output");

const scanLines = [
  "[*] Starting scan on target...",
  "[*] Resolving host...",
  "[+] Checking for SQL Injection vulnerabilities...",
  "[!] SQL Injection vulnerability found at /login.php",
  "[+] Checking for XSS vulnerabilities...",
  "[!] XSS vulnerability found at /search?q=",
  "[+] Checking for exposed admin panels...",
  "[+] Found: /admin",
  "[+] Checking for open ports...",
  "[+] Port 21 (FTP) - Open",
  "[+] Port 22 (SSH) - Open",
  "[+] Port 80 (HTTP) - Open",
  "[+] Port 3306 (MySQL) - Open",
  "[!] Potential MySQL exposure detected!",
  "[+] Scan complete. 4 vulnerabilities found.",
  "⚠️ Report generated. (Simulated)"
];

function typeLine(line, delay) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < line.length) {
        output.innerHTML += line[i];
        i++;
      } else {
        clearInterval(interval);
        output.innerHTML += "\n";
        resolve();
      }
    }, delay);
  });
}

async function startScan() {
  const url = document.getElementById("url").value.trim();
  if (!url) {
    alert("Please enter a valid website URL.");
    return;
  }

  output.innerHTML = "";
  output.innerHTML += `[>] Target: ${url}\n`;
  for (const line of scanLines) {
    await typeLine(line, 30);
  }

  output.innerHTML += "\n[✔] Scan Finished. Thank you for using ZAPPY Website Scanner.";
}
