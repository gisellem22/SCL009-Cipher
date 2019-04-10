describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "HOLA"), "OVSH");
    });

    it('debería retornar "mnopqrstuvwxyzabcdefghijkl" para "abcdefghijklmnopqrstuvwxyz" con offset 90', () => {
      assert.equal(window.cipher.encode(90, "hola"), "taxm");
    });

    it('debería retornar "QLÉD" para "NIÑA" con offset 3', () => {
      assert.equal(window.cipher.encode(3, "SUEÑO"), "VXHÉR");
    });

    it('debería retornar "xsék" para "niña" con offset 10', () =>{
      assert.equal(window.cipher.encode(10, "sueño"), "ceoéy");
    });

    it('debería retornar "VCZO AIBRC" para "HOLA MUNDO" con offset 40', () => {
      assert.equal(window.cipher.encode(40, "ABC DEF"), "OPQ RST");
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33,"OVSH"), "HOLA");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "mnopqrstuvwxyzabcdefghijkl" con offset 90', () => {
      assert.equal(window.cipher.decode(90, "taxm"), "hola");
    });

    it('debería retornar "NIÑA" para "QLÉD" con offset 3', () => {
      assert.equal(window.cipher.decode(3, "VXHÉR"), "SUEÑO");
    });

    it('debería retornar "niña" para "xsék" con offset 10', () =>{
      assert.equal(window.cipher.decode(10, "ceoéy"), "sueño");
    });

    it('debería retornar "HOLA MUNDO" para "VCZO AIBRC" con offset 40', () => {
      assert.equal(window.cipher.decode(40, "OPQ RST"), "ABC DEF");
    });
  });
});
