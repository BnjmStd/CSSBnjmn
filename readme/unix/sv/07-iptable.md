# CONFIGURAR IPTABLE (FIREWALL DEL SERVIDOR)

firewall

ufw iptable

primera práctica es empezar bloqueando todos los puertos

# sudo iptables -P INPUT DROP // HASTA EL SSH

negar todos los paquetes que entran


tambien puedes negar los que salgan


sudo iptables -A INPUT -p tcp --dport 22222 -j ACCEPT

Abre el puerto 22222 para conexiones TCP entrantes. Aquí está el desglose:

-A INPUT: Agrega una regla a la cadena INPUT, que gestiona el tráfico entrante.
-p tcp: Especifica que la regla aplica al protocolo TCP.
--dport 22222: Define el puerto de destino (22222 en este caso).
-j ACCEPT: Indica que el tráfico que coincide con esta regla debe ser aceptado.
Resultado:
Este comando permite que el puerto 22222 esté abierto y acepte conexiones entrantes en tu servidor para el protocolo TCP.

Nota:
Recuerda guardar las reglas de iptables si deseas que persistan después de reiniciar el sistema. Por ejemplo, en sistemas basados en Debian/Ubuntu:

bash

sudo apt install iptables-persistent
sudo netfilter-persistent save






SSH ES PROTOCOLO TCP?

Sí, SSH (Secure Shell) es un protocolo que utiliza TCP como su protocolo de transporte. Por defecto, SSH opera en el puerto 22 TCP, aunque puedes configurarlo para usar un puerto diferente (como el 22222 en tu caso).

Esto significa que si estás configurando un servidor SSH para que escuche en el puerto 22222, el comando de iptables que mencionaste es válido para permitir conexiones SSH en ese puerto.

# cerrar todos los puertos
sudo iptables -A INPUT -j DROP

# otra

sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT


# ver reglas actuales 
sudo iptables -L -n -v

Explicación:
-L: Lista las reglas actuales de iptables.
-n: Muestra las direcciones y puertos en formato numérico.
-v: Muestra información detallada, como el número de paquetes y bytes que han coincidido con cada regla.

# bloquear ip 

sudo iptables -A input -s *ip -j DROP

# BLOQUEAR TODAS LAS IP MENOS LA DEL ADMINISTRADOR

sudo iptables -A INPUT -s *ip -j ACCEPT

## guia

## step 1 update your system 

Distribution and operating system developers offer frequent software package updates, very often for security reasons. Keeping your distribution or operating system up-to-date is essential for securing your server.

## Step 2: Install the iptables firewall in Ubuntu

iptables is installed by default on most Linux systems. To confirm that iptables is installed, use the following command:

```bash

sudo apt-get install iptables

```

To make sure that your iptables rules are persistent after reboot, you must install the iptables persistent package using the following command:

```bash

sudo apt-get install iptables-persistent

```

Once this is installed, the iptables folder will contain two files for IPV4 and IPV6 rules:

/etc/iptables/rules.v4
/etc/iptables/rules.v6
Typically, an iptables command is as follows:


```bash

sudo iptables [option] CHAIN_rule [-j target]

```

Here is a list of some common iptables options:

-A --append: Adds a rule to a string (at the end).
-C --check: Finds a rule that matches the requirements of the string.
-D --delete: Removes the specified rules from a string.
-F --flush: Deletes all rules.
-I --insert: Adds a rule to a string at a given position.
-L --list: Displays all rules in a string.
-N -new chain: Creates a new string.
-v --verbose: Displays more information when using a list option.
-X --delete-chain: Deletes the supplied string.


# Step 3: Check the current status of iptables

To display all of the current rules on your server, enter the following command in the terminal window:

```bash

sudo iptables -L


```

The system displays the status of your channels.
The output will list three strings:

** poner step3.png


# Step 4: Allow traffic on localhost
To allow traffic from your own system (the localhost), add the input string by entering the following:
```bash
sudo iptables -A INPUT -i lo -j ACCEPT

```
This command configures the firewall to accept traffic for the localhost (lo) interface (-i). From now on, everything that comes from your system will pass through your firewall. You must set this rule to allow applications to communicate with the localhost interface.

# Step 5: Allow traffic on specific ports

These rules allow traffic on the different ports that you specify using the commands listed below. A port is a communication endpoint specified for a specific type of data.

To allow HTTP Web traffic, enter the following command:

```bash

sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

```

To allow only inbound SSH (Secure Shell) traffic, enter the following (note that we use the default SSH port number 22. If your port number is different, make sure to adjust the commands accordingly):


```bash

sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT

```

To allow HTTPS Internet traffic, enter the following command:

```bash

sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

```

The options work this way:

-p: Checks the specified protocol (tcp).
--dport: Specifies the destination port.
-j jump: Performs the action.

!warning! If you lose access to your server, you can always use the KVM/IPMI tool to access it again and modify your configuration or delete your rules.

For more information on accessing this tool, please refer to this guide.

# Step 6: Control traffic by IP address

Use the following command to accept traffic from a specific IP address.

```bash

sudo iptables -A INPUT -s your_IP_address_to_authorise -j ACCEPT

```

Replace the IP address in the command with the IP address you want to authorise.

You can also block traffic from an IP address:

```bash

sudo iptables -A INPUT -s your_IP_address_to_block -j DROP

```

Replace the IP address in the command with the IP address you want to block.

You can reject traffic from an IP address range with the following command:

```bash

sudo iptables -A INPUT -m iprange --src-range your_start_IP_address-your_end_IP_address -j REJECT


```

The iptables options we used in the examples work as follows:

-m: Matches the specified option.
-iprange: Instructs the system to wait for a range of IP addresses instead of one.
--src-range: Identifies the IP address range.


# Step 7: Delete unwanted traffic

If you are defining iptables firewall rules, you must prevent unauthorised access by removing all traffic from other ports:

```bash

sudo iptables -A INPUT -j DROP

```

The -A option adds a new rule to the string. If a connection goes through ports other than those you have defined, it will be discontinued.

!warning If you type this command before performing step 5, you will block all access including the current one, SSH access. This is particularly problematic on a machine you access remotely.

# Step 8: Delete a rule

A more precise method is to delete the line number of a rule.

```bash
sudo iptables -P INPUT DROP 


```

First, list all rules by entering the following:

```bash

sudo iptables -L --line-numbers


```

** imagen step8.png

Locate the line for the firewall rule you want to remove and run this command:

```bash

sudo iptables -D INPUT <Number>

```

Replace Number with the rule line number you want to delete.

# Step 9: Save your changes

When the system is restarted, iptables does not keep the rules you created. Whenever you configure iptables on Linux, any changes you make apply only until the next reboot.

To save rules to Ubuntu-based systems, first, you must log in as the root user using the sudo su command:

```bash

ubuntu@server:~$ sudo su
root@server:/home/ubuntu#

```

Next, run the following command:

```bash

iptables-save > /etc/iptables/rules.v4

```

This will save the rules directly to the IPV4 folder.

The next time your system boots, iptables will automatically reload the firewall rules.

You can now configure basic iptables firewall rules for your Linux server. Feel free to experiment because you can always delete the rules you don't need, or empty all the rules and start over.

https://help.ovhcloud.com/csm/en-dedicated-servers-firewall-iptables?id=kb_article_view&sysparm_article=KB0043436 