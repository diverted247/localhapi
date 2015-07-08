# localhapi
A local hapijs server on any filesystem or port

1. cd ~/
2. git clone https://github.com/diverted247/localhapi.git
3. cd localhapi
4. npm install
5. Add to ~./bash_profile

```
startLocalServer() {
    if [ "$#" == 0 ]
    then
        local PORT=8888
    else
        local PORT=$1
    fi
    node ~/localhapi/server.js $PORT
}
 
alias _w=startLocalServer
#_w      --> Opens HTTP server at path on port 8888
#_w 9000 --> Opens HTTP server at path on port 9000
```
6. Open new console
7. '_w 9000' or '_w' on any directory

Edit to your needs!

Ted :)
