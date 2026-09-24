import { describe, it, expect } from "vitest";
import { sumar, restar, multiplicar, dividir } from "../src/calculadora.js";

describe("Calculadora - Pruebas Unitarias", () => {
  it("debe sumar dos números correctamente", () => {
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(-1, 1)).toBe(0);
  });

  it("debe restar dos números correctamente", () => {
    expect(restar(10, 4)).toBe(6);
    expect(restar(5, 8)).toBe(-3);
  });

  it("debe multiplicar dos números correctamente", () => {
    expect(multiplicar(3, 4)).toBe(12);
    expect(multiplicar(5, 0)).toBe(0);
  });

  it("debe dividir dos números correctamente", () => {
    expect(dividir(10, 2)).toBe(5);
  });

  it("debe lanzar un error al intentar dividir entre cero", () => {
    expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero");
  });
});
