#!/bin/bash

FILES=$(ls *.txt)
echo $FILES

for FILE in $FILES
do
	HTML=$(echo $FILE | sed 's/\(.\+\).txt/\1.html/')
	cp $FILE $HTML
done
