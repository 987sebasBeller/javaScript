import multiplicar from "./multiplicador";
describe("Multiplicar",()=>{
    it("deberia multiplicar dos numeros", () => {
        expect(multiplicar(3, 6)).toEqual(18);
      });
}
);