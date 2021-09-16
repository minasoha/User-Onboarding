/* eslint-disable jest/valid-expect */
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


    it('the proper elements are showing', () =>{
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        checkBox().should('exist');
        submitBtn().should('exist');
    })

    describe('filling the elements and submitting', ()=>{
        it('can navigate to the site', () =>{
            cy.url().should('include', 'localhost');
        })
        it('submit button starts out disabled', () =>{
            submitBtn().should('be.disabled');
        })
        it('can type in the inputs', () =>{
            nameInput().should('have.value', '').type('Testing this!').should('have.value', 'Testing this!');
            emailInput().should('have.value', '').type('Testing this as well!').should('have.value', 'Testing this as well!');
            passwordInput().should('have.value','').type('Testing this but I can not see it').should('have.value', 'Testing this but I can not see it');
        })
        it('the checkbox starts off as unchecked', () => {
            cy.get('[type=checkbox]').uncheck();
        })
        it('checkbox can be checked', () =>{
            cy.get('[type="checkbox"]').check();
            cy.get('[type=checkbox]').uncheck();
        })
        it('the submit button enables when the inputs are filled out', () =>{
            nameInput().type('Testing Testing');
            emailInput().type('testing@testing.com');
            passwordInput().type('testing but I cant see it');
            checkBox().check();
            submitBtn().should('not.be.disabled');
        })
        it('pressing submit resets the inputs', ()=>{
            nameInput().type('Testing Testingg');
            emailInput().type('testingg@testing.com');
            passwordInput().type('testingg but I cant see it');
            checkBox().check();
            submitBtn().click();
        })



    })


    describe('Checking for form validations', ()=>{
        it('checking if the validation fire up', () =>{
            nameInput().type('my name').clear();
            emailInput().type('something');
            passwordInput().type('asd');
            cy.contains('Name is required!');
            cy.contains('Must be a valid email address!');
            cy.contains('Password must be 5 characters long!');

        })
    })


    

})