class Entero:
    def __init__(self, numero):
        self.numero = numero
        
    def setNum (self):
        while True:
            self.numero = input("Ingrese un número entero: ")
            try:
                self.numero = int(self.numero)
                break
            except ValueError:
                print("Error: Debe ingresar un número entero.")
    
    def getNumero(self):
        return self.numero
    
    def showNumero(self):
        print("El número es:", self.numero)
        
    
    def incrementarNumero(self):
        self.numero += 1
        
    def decrementarNumero(self):
        self.numero -= 1
        
    def esParImpar (self):
        if self.numero % 2 == 0:
            return "El número es par"
        else:
            return "El número es impar"
        
    def esNumeroPerfecto (self):
        suma = 0
        for i in range(1, self.numero):
            if self.numero % i == 0:
                suma += i
        return suma == self.numero
    
    
    def esPrimo (self):
        if self.numero <= 1:
            return f"{self.numero} no es Primo"
        for i in range(2, int(self.numero ** 0.5) + 1):
            if self.numero % i == 0:
                return f"{self.numero} no es Primo"
        return f"{self.numero} es Primo"        
        
    def menu (self):
        while True:
            print("\nMenú:")
            print("1. Ingresar número")
            print("2. Mostrar número")
            print("3. Incrementar número")
            print("4. Decrementar número")
            print("5. Verificar si es par o impar")
            print("6. Verificar si es un Numero Perfecto")
            print("7. Verificar si el numero es Primo")
            print("8. Salir")
            
            opcion = input("Ingrese una opción: ")
            
            if opcion == "1":
                self.setNum()
            elif opcion == "2":
                self.showNumero()
            elif opcion == "3":
                self.incrementarNumero()
            elif opcion == "4":
                self.decrementarNumero()
            elif opcion == "5":
                print(self.esParImpar())
            elif opcion == "6":
                print(self.esNumeroPerfecto())
            elif opcion == "7":
                print(self.esPrimo())
            elif opcion == "8":
                print("Saliendo...")
                break
            else:
                print("Opción inválida Intente nuevamente.") 
                
                
numero = Entero(6)

numero.menu()
            
            
            
            

            
        
        