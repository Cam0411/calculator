"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.sev');
const egiht = document.querySelector('.eig');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const douzero = document.querySelector('.douzero');
const percent = document.querySelector('.percent');
const point = document.querySelector('.point');
const sum = document.querySelector('.sum');
const min = document.querySelector('.min');
const dou = document.querySelector('.dou');
const divi = document.querySelector('.divi');
const del = document.querySelector('.del');
const dele = document.querySelector('.dele');
const el = document.querySelector('.eval');
const value = document.querySelector('.val');
const res = document.querySelector('.result');
function caculator() {
    one === null || one === void 0 ? void 0 : one.addEventListener('click', () => {
        value.innerHTML += '1';
        res.innerHTML = `${res.innerHTML}`;
    });
    two === null || two === void 0 ? void 0 : two.addEventListener('click', () => {
        value.innerHTML += '2';
    });
    three === null || three === void 0 ? void 0 : three.addEventListener('click', () => {
        value.innerHTML += '3';
    });
    four === null || four === void 0 ? void 0 : four.addEventListener('click', () => {
        value.innerHTML += '4';
    });
    five === null || five === void 0 ? void 0 : five.addEventListener('click', () => {
        value.innerHTML += '5';
    });
    six === null || six === void 0 ? void 0 : six.addEventListener('click', () => {
        value.innerHTML += '6';
    });
    seven === null || seven === void 0 ? void 0 : seven.addEventListener('click', () => {
        value.innerHTML += '7';
    });
    egiht === null || egiht === void 0 ? void 0 : egiht.addEventListener('click', () => {
        value.innerHTML += '8';
    });
    nine === null || nine === void 0 ? void 0 : nine.addEventListener('click', () => {
        value.innerHTML += '9';
    });
    zero === null || zero === void 0 ? void 0 : zero.addEventListener('click', () => {
        value.innerHTML += '0';
    });
    douzero === null || douzero === void 0 ? void 0 : douzero.addEventListener('click', () => {
        value.innerHTML += '00';
    });
    percent === null || percent === void 0 ? void 0 : percent.addEventListener('click', () => {
        value.innerHTML += '%';
    });
    point === null || point === void 0 ? void 0 : point.addEventListener('click', () => {
        value.innerHTML += '.';
    });
    sum === null || sum === void 0 ? void 0 : sum.addEventListener('click', () => {
        value.innerHTML += ' + ';
    });
    min === null || min === void 0 ? void 0 : min.addEventListener('click', () => {
        value.innerHTML += ' - ';
    });
    dou === null || dou === void 0 ? void 0 : dou.addEventListener('click', () => {
        value.innerHTML += ' * ';
    });
    divi === null || divi === void 0 ? void 0 : divi.addEventListener('click', () => {
        value.innerHTML += ' / ';
    });
    del === null || del === void 0 ? void 0 : del.addEventListener('click', () => {
        value.innerHTML = ' ';
        res.innerHTML = ' ';
    });
    dele === null || dele === void 0 ? void 0 : dele.addEventListener('click', () => {
        const result = value.innerHTML;
        const arr = result.split('');
        arr.pop();
        value.innerHTML = String(arr.join('')).trim();
    });
    function resValue() {
        el === null || el === void 0 ? void 0 : el.addEventListener('click', () => {
            try {
                const result = value.innerHTML;
                if (result.length > 0) {
                    res.innerHTML = eval(result);
                    value.innerHTML = '';
                }
            }
            catch (e) {
                if (e instanceof SyntaxError) {
                    res.innerHTML = 'Error';
                    value.innerHTML = '';
                }
            }
        });
    }
    resValue();
}
caculator();
