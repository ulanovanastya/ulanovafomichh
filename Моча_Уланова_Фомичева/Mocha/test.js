describe("Калькулятор", function() {
    describe("Сложение", function() {
        it("2 + 3 должно быть 5", function() {
            assert.equal(add(2, 3), 5);
        });
        it("-2 + (-3) должно быть -5", function() {
            assert.equal(add(-2, -3), -5);
        });
        it("Сложение с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(add("abc", 3));
        });
    });

    describe("Вычитание", function() {
        it("5 - 3 должно быть 2", function() {
            assert.equal(subtract(5, 3), 2);
        });
        it("-5 - (-3) должно быть -2", function() {
            assert.equal(subtract(-5, -3), -2);
        });
        it("Вычитание с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(subtract("abc", 3));
        });
    });

    describe("Умножение", function() {
        it("2 * 3 должно быть 6", function() {
            assert.equal(multiply(2, 3), 6);
        });
        it("-2 * (-3) должно быть 6", function() {
            assert.equal(multiply(-2, -3), 6);
        });
        it("Умножение с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(multiply("abc", 3));
        });
    });

    describe("Деление", function() {
        it("6 / 3 должно быть 2", function() {
            assert.equal(divide(6, 3), 2);
        });
        it("-6 / (-3) должно быть 2", function() {
            assert.equal(divide(-6, -3), 2);
        });
        it("Деление на ноль должно вернуть Infinity", function() {
            assert.equal(divide(6, 0), Infinity);
        });
        it("Деление с некорректными данными (строка) должно вернуть NaN", function() {
            assert.isNaN(divide("abc", 3));
        });
    });

    describe("Квадратный корень", function() {
        it("Квадратный корень из 9 должен быть 3", function() {
            assert.equal(squareRoot(9), 3);
        });
        it("Квадратный корень из -1 должен быть NaN", function() {
            assert.isNaN(squareRoot(-1));
        });
        it("Квадратный корень из строки 'abc' должен быть NaN", function() {
            assert.isNaN(squareRoot("abc"));
        });
    });

    describe("Возведение в квадрат", function() {
        it("2 в квадрате должно быть 4", function() {
            assert.equal(square(2), 4);
        });
        it("-2 в квадрате должно быть 4", function() {
            assert.equal(square(-2), 4);
        });
        it("Возведение в квадрат строки 'abc' должно вернуть NaN", function() {
            assert.isNaN(square("abc"));
        });
    });

    describe("Кнопка =", function() {
        it("Должна выполнять последнюю операцию (сложение)", function() {
            setOperation('add');
            assert.equal(calculateWithValues(2, 3), 5);
        });
        it("Должна выполнять последнюю операцию (вычитание)", function() {
            setOperation('subtract');
            assert.equal(calculateWithValues(-5, -3), -2);
        });
        it("Должна выполнять последнюю операцию (умножение)", function() {
            setOperation('multiply');
            assert.equal(calculateWithValues(-2, -3), 6);
        });
        it("Должна выполнять последнюю операцию (деление)", function() {
            setOperation('divide');
            assert.equal(calculateWithValues(-6, -3), 2);
        });
        it("Должна выполнять последнюю операцию (квадратный корень)", function() {
            setOperation('squareRoot');
            assert.equal(calculateWithValues(9), 3);
        });
        it("Должна выполнять последнюю операцию (возведение в квадрат)", function() {
            setOperation('square');
            assert.equal(calculateWithValues(-2), 4);
        });
        it("Должна возвращать ошибку при некорректной операции", function() {
            setOperation('unknown');
            assert.equal(calculateWithValues(2, 3), "Ошибка: неизвестная операция");
        });
    });
});

// Функции калькулятора для тестов
function add(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a + b;
}

function subtract(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a - b;
}

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    return a * b;
}

function divide(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    if (b === 0) return Infinity;
    return a / b;
}

function squareRoot(a) {
    if (isNaN(a)) return NaN;
    return Math.sqrt(a);
}

function square(a) {
    if (isNaN(a)) return NaN;
    return Math.pow(a, 2);
}

function setOperation(operation) {
    currentOperation = operation;
}

function calculateWithValues(num1, num2 = null) {
    switch (currentOperation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'squareRoot':
            return squareRoot(num1);
        case 'square':
            return square(num1);
        default:
            return "Ошибка: неизвестная операция";
    }
}