/*                     33-1 How does internet work, HTTP Vs HTTPs and What is an API */

const user = {id: 1, name: 'Al pacino', job: 'actor'};
console.log(user);
// Output: { id: 1, name: 'Al pacino', job: 'actor' }

/* 
// What is Internet?
* The Internet, sometimes called simply "the Net," is a worldwide system of computer networks
* a network of networks in which users at any one computer can, if they have permission, get information from any other computer
* (and sometimes talk directly to users at other computers).
// ============================================

// What is IP address?
An IP address is a unique address that identifies a device on the internet or a local network. 
208.65.153.238 - YouTube
66.220.149.25 - facebook
72.21.211.176 - amazon
173.0.84.3 - PayPal
// =============================================

IPv4 =========>   vs =============> IPv6

Est. 1981 ------------------------> Est. 2012
32-bit address size --------------> 128-bit address size
4.3 billion possible addresses ---> 340 undecillion possible addresses
// ============================================

// What is DNS?
* The Domain Name System (DNS) is the phonebook of the Internet.
* Humans access information online through domain names, like nytimes.com or espn.com.
* Web browsers interact through Internet Protocol (IP) addresses.
* DNS translates domain names to IP addresses so browsers can load Internet resources.
// ===========================================

//Steps of DNS:

            _____________________________(4)___________________________________
Web Browser ^                                                                 ^Hosting Server
            <--(3)--- DNS Server <-----(2)-------> DNS Server 
    ^-----------(1)-->^    

(1) When a user enters a domain name in a browser, the server will search through a global server network that makes up the Domain Name System (DNS).
(2) The request is made for one DNS server and if the address is not found there, it moves to the other.
(3) The DNS server that has information about the IP address will return it to the browser.
(4)The browser will request data about the site from the domain's hosting server. Once the hosting server sends the data back, the web browser will convert it into a web page.
// ==============================================

// How the internet works?

🌐 1. The Internet is a Network of Networks
* The internet is not one single computer — it’s millions of computers, servers, and devices all connected together.
* These connections are made through wires (fiber optic cables, copper cables), satellites, and wireless signals (Wi-Fi, 4G/5G
_____________________________________________________________________________

🧭 2. How Data Travels
* Information on the internet (like a message, video, or webpage) is broken into small packets of data.
* Each packet has:
    * Sender address (your device’s IP)
    * Receiver address (the destination IP)
    * Part of the message

* These packets travel through many different routes (like cars on roads) and get reassembled at the destination.
_____________________________________________________________________________

🔑 3. IP Address & DNS
* Every device on the internet has a unique IP address (like a phone number).

* Since humans prefer names (like 'google.com'), the DNS (Domain Name System) acts like a phonebook:
    * You type 'google.com'
    * DNS translates it into an IP address (e.g., '142.250.72.14')
    * Your browser then connects to that server.
_____________________________________________________________________________

📡 4. Servers & Clients
* Client = your device (phone, laptop, etc.)
* Server = a powerful computer that stores websites, apps, or data
* Example:
    * You (client) request youtube.com
    * YouTube’s servers send back the web page and videos.
_____________________________________________________________________________

🔒 5. Protocols
The internet works because of standard protocols (rules):
* HTTP/HTTPS → for websites
* SMTP/IMAP → for email
* TCP/IP → for reliable data delivery
* FTP → for file transfer
_____________________________________________________________________________

🚀 6. Putting It Together
1. You type 'example.com' in your browser.
2. DNS finds the server’s IP address.
3. Your computer sends a request (via TCP/IP).
4. The server responds with the webpage data.
5. Your browser reassembles the data packets and shows you the page.
_____________________________________________________________________________

⚡In short:
The internet is like a global postal system — but instead of letters, it sends tiny packets of data at the speed of light, and instead of addresses, it uses IPs with DNS as the directory.
// ==================================================

// What is HTTP?
* HTTP stands for Hyper Text Transfer Protocol.
* It is a protocol for fetching resources such as HTML documents.
* It is the foundation of any data exchange on the Web and it is a client-server protocol which means requests are initiated by the recipient, usually the Web browser.
// ====================================================

// HTTP Layer
HTTP is in the Application layer of the Internet protocol suite model and in the Session Layer of the OSI Model.

7 Layers of the OSI Model:

1. Application ------> * End User layer
                       * HTTP, FTP, IRC, SSH, DNS

2. Presentation ------> * Syntax layer
                        * SSL, SSH, IMAP, FTP, MPEG, JPEG

3. Session -----------> * Synch & send to port
                        * API's, Sockets, WinSock

4.Transport ----------> * End-to-end connections
                        * TCP, UDP

5. Network -----------> * Packets
                        * IP, ICMP, IPSec, IGMP

6. Data Link ---------> * Frames
                        * Ethernet, PPP, Switch, Bridge

7. Physical ----------> * Physical structure
                        * Coax, Fiber, Wireless, Hubs, Repeaters
// =================================================

//HTTP vs HTTPS

HTTP ====================================== > HTTPS

* HTTP stands for                            * HTTPS stands for
'HyperText Transfer Protocol'. -------------->'HyperText Transfer Protocol Secure'.

* HTTP works at the                            * HTTPS works at the transport
application layer. -------------------------->  layer.

* The default port number is 80,                * Here, the default port number
for communication. -------------------------->  is 443. 

* No encryption is present                      * Both encryption and decryption
in HTTP websites. --------------------------->   exist on HTTPS websites.


//HTTP vs HTTPS Example

HTTP:
Eric ---> http://www.site.com ----> password: xyz123

(Without password encryption
Hacker see: xyz123)

HTTPS:
Sophie ----> https://www.site.com -----> password: xyz123

(With password encryption
Hacker see: "hYcgU25eDu")
 
*/