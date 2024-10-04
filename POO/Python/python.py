def HolaMundo():
    print("Hola mundo")



def ObtenerEdad():
    edad = input("Ingrese su edad: ")
    print(f"Su edad es: {edad}")

def CalcularEdad():
    fechadenacimiento = int(input("Ingrese su año de nacimiento: "))
    nacio = 2024 - fechadenacimiento
    print (f"Usted nacio el año: {nacio}")

HolaMundo()
ObtenerEdad()
CalcularEdad()