using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace Progaramando_en_VSC;

class Program
{
    static void Main(string[] args)
    {
        HelloWorld();

        ObtenerEdad();

        CalcularEdad();
  

    }


    

     public static void HelloWorld(){
        Console.WriteLine("Hello, World");

    }
    public static void ObtenerEdad()
        {
             Console.WriteLine("Introduzca su edad: ");
            string? edadInput = Console.ReadLine();
            if (string.IsNullOrEmpty(edadInput))
            {
                Console.WriteLine("Introduzca su edad: ");

            }
            else
            {
                int edadInteger = Int32.Parse(edadInput);
                Console.WriteLine("Tu edad es: " + edadInteger);

            }
            
    }

    public static void CalcularEdad(){
        Console.WriteLine("Introduzca su año de nacimiento: ");
        string? anioNacimientoInput = Console.ReadLine();
        if (string.IsNullOrEmpty(anioNacimientoInput))
        {
            Console.WriteLine("Introduzca un valor valido");

        }
        else
        {
            int anioNacimiento = Int32.Parse(anioNacimientoInput);
            Console.WriteLine("Tu edad calculada es: " + (2024 - anioNacimiento));
        }

    }


}

   
        






