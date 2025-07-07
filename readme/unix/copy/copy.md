touch ~/.hushlogin
echo "" > ~/.hushlogin

npm install --omit=dev

scp -P 22222 -r .next benjamin@genomas.cl:/home/benjamin/genomas/
