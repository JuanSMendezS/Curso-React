describe('Pruebas del componente', () => {
    test('Esta prueba no debe de fallar', () => {
        //1. Inicializar
        const message = 'Hola mundo';
        //2. Estimulo
        const message2 = message.trim();
        //3. Observar
        expect(message).toBe(message2);
    })
})
