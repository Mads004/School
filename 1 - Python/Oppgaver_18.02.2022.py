# Lag en liste med minst 20 tall

myList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,20]
print("Dette er min liste:", myList)

#A)

def ena():
    summen = sum(myList)
    print("A = ",summen)

ena()


#B)

def enb():
    import statistics
    medianen = statistics.median(myList)
    print("B = ", medianen)

enb()


#C)

def enc():
    summen = sum(myList)
    gjennomsnitt = summen / 21
    print("C = ", gjennomsnitt)

enc()


#D)

def end():
    index4 = myList[4]
    index18 = myList[18]
    print("D = ", index4, index18)

end()


#E)

def ene():
    maxVerdi = max(myList)
    print("E = ", maxVerdi)

ene()


#F

def enf():
    myList2 = list(dict.fromkeys(myList))
    print("F = ", myList2)

enf()


#G

def eng():
    last5 = myList[-5],myList[-4],myList[-3],myList[-2],myList[-1]
    print("G = ", last5)

eng()


#H

def enh():
    summen2 = sum(myList[1::2])
    print("H = ", summen2)

enh()