import sys
i=1
while i<len(sys.argv):
    if i!=1:
        print(' '+str(sys.argv[i]),end='')
    else:
        print(str(sys.argv[i]),end='')
    i=i+1