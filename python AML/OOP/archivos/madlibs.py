import random

words = []

def madlibs():
    # Open the texto.txt file
    with open("texto.txt", "r") as file:
        # Read the contents of the file
        contents = file.read()
        # Split the contents into words
        words = contents.split()
        # Scramble the letters in each word
        scrambled_words = ["".join(random.sample(word, len(word))) for word in words]
        # Ask the user to guess the word
        guess = input(f"Guess the word: {scrambled_words[i]} ")
        if guess == words[i]:
            print("Correct!")
        else:
            print("Incorrect!")
    

madlibs()
