// Cargar Pyodide desde un CDN
async function runPythonCode() {
    // Cargar Pyodide
    let pyodide = await loadPyodide();
  
    // Ejecutar código Python en el navegador
    // ``  Alt + 96
    var codigoPy = `
      def my_algorithm(x):
            return x * 2
            
      my_algorithm(90)
    `;
  
    let result = await pyodide.runPythonAsync(codigoPy);
  
    // Mostrar el resultado en el div con id 'output'
    document.getElementById('output').innerText = 'Resultado: ' + result;
  }