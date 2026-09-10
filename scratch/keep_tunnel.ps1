while ($true) {
    ssh -R 80:localhost:5173 nokey@localhost.run -o StrictHostKeyChecking=no -o ServerAliveInterval=10 -o ServerAliveCountMax=120
    Start-Sleep -Seconds 3
}
