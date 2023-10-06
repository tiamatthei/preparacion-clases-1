# 3 variables: lownum, highnum, mult
# lowNum: inicio
# highNum: final
# mult: multiplos de

lowNum = 3
highNum = 9
mult = 3

# asignando una variable
# variable = 0

# comparando una variable con 0 (en este caso)
# variable == 0

for numero in range(lowNum, highNum + 1):
    if numero % mult == 0:
        print(numero)


