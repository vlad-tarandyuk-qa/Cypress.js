describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); // нажали войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // после авт. виден текст
         cy.get('#messageHeader').should('be.visible') // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })
 
 it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').click(); // нажали Забыли пароль
    cy.get('#mailForgot').type('german@dolnikov.ru'); //ввели верный пароль
    cy.get('#restoreEmailButton').click(); // нажали отправить код
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
})

it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
    cy.get('#pass').type('iLoveqastudio134'); //ввели неверный пароль
    cy.get('#loginButton').click(); // нажали войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после неудачной авт. виден текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('ge@vt.ru'); // ввели неверный логин
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); // нажали войти
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после неудачной авт. виден текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})

it('Проверка, что в логине есть @', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); // нажали войти
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // после неудачной авт. виден текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логи с заглавными буквами
    cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
    cy.get('#loginButton').click(); // нажали войти
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // виден текст
    cy.get('#messageHeader').should('be.visible') // текст виден пользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
})
})
