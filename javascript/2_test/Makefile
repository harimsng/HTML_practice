# utilizes auto index of nginx
FILES	:= $(shell ls *.html)
FILES	:= $(FILES:%.html=%.txt)

LISTEN	:= localhost:8000
ROOT	:= javascript
DIR		:= 1_test

all: clean $(FILES)

$(FILES): %.txt: %.html
	cp $< $@

clean:
	$(RM) $(NAME)
	$(RM) $(FILES)

re: clean all

.PHONY: all clean re
