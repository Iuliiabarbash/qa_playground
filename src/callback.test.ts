/** gets a number between 1 and 10 for the callback
 * @callback numberHandler is passed the number generated
 */
 function getNumber(numberHandler) {
    numberHandler(Math.ceil(Math.random() * 10));
  }

  function numberChecker(result: number) {
      expect(result >= 1).toBeTruthy();
      expect(result <= 10).toBeTruthy();
      expect(result.toFixed(0)).toBe(`${result}`);
  }

  describe("numberHandler", () => {
      it('looks good when it checked by a named callback', () => {
          getNumber(numberChecker);
      });
      it("looks good when checked my anonymous callback", () => {
          getNumber((result) => {
              expect(result >= 1).toBeTruthy();
              expect(result <= 10).toBeTruthy();
              expect(result.toFixed(0)).toBe(`${result}`);
          });
      })
  });
  

  function actionA(callback) {
      callback(true);
  }

  function actionB(callback: boolean) {
      expect(callback).toBeTruthy();
  }
  describe("actionA", () => {
      it("should be true", () => {
          actionA(actionB);
      });
  });
  //anonymous functions

  function ActionA(callback2){
      callback2(true)
  }

  describe("ActionA", ()=>{
      it("should be true", ()=>{
          ActionA((result)=>{
              expect(result).toBeTruthy()
          })
      })
  })