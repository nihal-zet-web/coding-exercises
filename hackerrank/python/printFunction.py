if __name__ == '__main__':
    n = int(input())
    
nPreviousNums = []
def printPreviousNumbers(n):
    global nPreviousNums
    nPreviousNums.append(n)
    for i in range(n):
        n -= 1
        nPreviousNums.append(n)
    nPreviousNums.sort()
    
    for num in nPreviousNums:
        if (num != 0):
            print(nPreviousNums[num], end="")
        
printPreviousNumbers(n)
