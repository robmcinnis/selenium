#!/bin/bash
HOST="localhost"
USER="chitti"
PASS="123"
CMD=$@
XYZ=$(expect -c "
spawn ssh $USER@$HOST
expect "password:"
send "$PASSr"
expect "\$"
send "$CMDr"
expect -re "$USER.*"
send "logout"
")

echo "$XYZ"
