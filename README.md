
Steps
------

```bash
sudo apt-get remove nodejs npm
sudo apt-get update
sudo apt-get upgrade

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

nodejs -v
npm -v
```

npm install -g create-react-app
npx create-react-app hello-world
