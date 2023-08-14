NAME	:= examples.html

FILES	:= $(shell ls *.html | sed 's/examples.html//')
FILES	:= $(FILES:%.html=%.txt)

all: $(NAME)

$(NAME): $(FILES)

$(FILES): %.txt: %.html
	cp $< $@
	echo "<a href=\"http://localhost:8000/html_intro/$<\" title=\"$<\">$<</a>" >> $(NAME)
	echo "<a href=\"http://localhost:8000/html_intro/$@\" title=\"$@\">$@</a>" >> $(NAME)
	echo "<p></p>" >> $(NAME)

clean:
	$(RM) examples.html
	$(RM) $(FILES)

re: clean all

.PHONY: all gen_each clean re
