import { describe, it, expect } from 'vitest'; // Importa las funciones principales de Vitest para definir y ejecutar pruebas
import { sum } from './math'; // Importa la función sum que se va a probar

describe('sum()', function() { // Agrupa las pruebas relacionadas con la función sum()
    it('suma dos números', function() { // Define un caso de prueba que verifica la suma de dos números
        expect(sum(1, 2)).toBe(3); // Comprueba que sum(1, 2) devuelve 3
    });
});