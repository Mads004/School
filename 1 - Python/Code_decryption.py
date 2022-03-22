import hashlib

namelist = open('norwegian.txt', encoding="utf-8").readlines()

for word in namelist:
    word = word.strip()
    word = word.capitalize()
    word = word+"123"
    if len(word) > 8:
        hash_hack = hashlib.md5(word.encode()).hexdigest()
        if (hash_hack == "2f4b1888619f3bc72b04b070b2fd01b5"):
            print(word)
            exit()
