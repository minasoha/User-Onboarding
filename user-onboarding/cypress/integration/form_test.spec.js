/* eslint-disable no-undef */
describe("User-Onboard App", () =>{
    beforeEach(()=>{
        cy.visit('localhost:3000');
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkBox = () => cy.get('input[type=checkbox]');
    const submitBtn = () => cy.get('button');



    it('checking test', () =>{
        expect(1 + 2 ).to.equal(3);
    })


    it('the proper elemets are showing', () =>{
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        checkBox().should('exist');
        submitBtn().should('exist');
    })

    


    

})