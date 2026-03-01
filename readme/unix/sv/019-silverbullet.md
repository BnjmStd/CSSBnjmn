# mdir

mkdir space

# install docker image

docker run -d --restart unless-stopped --name silverbullet -p 3010:3000 -v ./space:/space zefhemel/silverbullet

# permisos

sudo chmod 755 /etc/nginx
sudo touch /etc/nginx/.htpasswd
sudo chmod 644 /etc/nginx/.htpasswd

echo -n "benja:" | sudo tee -a /etc/nginx/.htpasswd

echo "benja:$(openssl passwd -apr1)" | sudo tee -a /etc/nginx/.htpasswd

file:
