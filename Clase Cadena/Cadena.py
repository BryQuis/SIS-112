class Cadena:
    def _init_(self, cadena):
        self.cadena = cadena

    def get_cadena(self):  # Obtiene el valor asignado a la cadena
        return self.cadena

    # Manipulación de cadenas
    def concatenar(self, otra_cadena):  # Unir una cadena con otra
        self.cadena += otra_cadena

    def invertir(self):  # Invertir los caracteres de la cadena
        self.cadena = self.cadena[::-1]

    # Comparaciones
    def es_vacia(self):  # Compara si la cadena no tiene caracteres
        return len(self.cadena) == 0

    def contiene(self, subcadena):  # Compara si la subCadena existe dentro de la cadena
        return subcadena in self.cadena

    def comienza_con(self, prefijo):  # Compara si la cadena comienza con el prefijo "caracter"
        return self.cadena.startswith(prefijo)

    def termina_con(self, sufijo):  # Compara si la cadena termina con el sufijo "caracter"
        return self.cadena.endswith(sufijo)

    # Otras operaciones
    def longitud(self):  # Obtiene la cantidad de caracteres que tiene la cadena
        return len(self.cadena)

    def a_mayusculas(self):  # Obtiene la cadena transformada en MAYUSCULA
        return self.cadena.upper()

    def a_minusculas(self):  # Obtiene la cadena transformada en minuscula
        return self.cadena.lower()