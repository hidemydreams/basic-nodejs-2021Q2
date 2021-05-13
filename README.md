# Welcome to the Caesar Cipher CLI

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## Instructions

Download this and type in your console

> npm install

You can run this program just by typing in your console:

> $ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

Options:

> -s, --shift: Number of shifts you want to encode your text
> -i, --input: Input file
> -o, --output: Output file
> -a, --action: Action (encode/decode)

## Missing options

### Missing input file

Shift and actions options are required. You can also use it just in your console. For example if one of the options is missing:

> $ node my_caesar_cli -a encode -s 7 -o "./output.txt"

Your console will be opened and you can pass your text right into it. Then it will be written to output.txt in this case.

### Missing output file file

> $ node my_caesar_cli -a encode -s 7 -i "./input.txt"

Then you will get your result instantly in the console, with encryption from your "./input.txt" file.

### Missing input and output files

> $ node my_caesar_cli -a encode -s 7

In this case console will be opened and you will be asked to type your text into the console, then you will get the result in the console too. You can exit the process with CTRL+C combination on your keyboard.

### Good Luck!
