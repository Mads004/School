# Lag en dictionary

my_dict = {1:10, 2:20, 3:30, 4:40, 5:50, 6:60, 7:70, 8:30, 9:40, 10:50}

#A)

def toa():
    my_dict['mynewkey'] = 'mynewvalue'
    print("A) Dictionary with added key-value:", my_dict)

toa()


#B)

def tob():
    del my_dict[8]
    print("B) Dictionary without 8:", my_dict)

tob()


#C)

def toc():
    k_v_exchanged = {}

    for key, value in my_dict.items():
        if value not in k_v_exchanged:
            k_v_exchanged[value] = [key]
        else:
            k_v_exchanged[value].append(key)

    # Result
    print("C) Dictionary without duplicates:", k_v_exchanged)

toc()
