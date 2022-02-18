# Lag en liste med minst 20 tall

myList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20]
print("Dette er min liste:", myList)

#A)

def ena():
    summen = sum(myList)
    print(summen)

ena()


#B)

def enb():
    import statistics
    medianen = statistics.median(myList)
    print(medianen)

enb()


#C)

def enc():
    summen = sum(myList)
    gjennomsnitt = summen / 21
    print(gjennomsnitt)

enc()