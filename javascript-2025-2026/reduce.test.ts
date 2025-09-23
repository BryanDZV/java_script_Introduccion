import { describe, it, expect } from "vitest"; // Importa las funciones principales de Vitest para definir y ejecutar pruebas
import { reduce } from "./reduce"; // Importa la función sum que se va a probar

function sum(a: number, b: number): number {
  // Define una función sum que suma dos números
  return a + b; // Devuelve la suma de a y b
}
describe("reduce()", function () {
  // Agrupa las pruebas relacionadas con la función reduce()
  it("suma dos números", function () {
    // Define un caso de prueba que verifica la suma de dos números
    expect(reduce(sum, 0, [1, 2, 3])).toBe(6); // Comprueba que reduce(sum, 0, [1, 2, 3]) devuelve 6
  });
  it("cuenta números pares", function () {
    // Define un caso de prueba que verifica la cuenta de números pares
    expect(
      reduce((acc, x) => acc + (x % 2 === 0 ? 1 : 0), 0, [1, 2, 3, 4])
    ).toBe(2); // Comprueba que reduce con la función de conteo de pares devuelve 2
  });
  it("genera acrónimo", function () {
    // Define un caso de prueba que verifica la generación de un acrónimo
    expect(
      reduce((acc, x) => acc + x[0], "", ["As", "Soon", "As", "Possible"])
    ).toBe("ASAP"); // Comprueba que reduce con la función de acrónimo devuelve 'ASAP'
  });
});
