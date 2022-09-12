// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce((acc, item) => acc += item, 0)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType1(a: number, b: number, c: number): string {
    if (a === b && b === c) {
        return '10'
    }
    if ((a === b && b !== c && a + b > c) || (a === c && c !== b && a + c > b) || (b === c && c !== a && b + c > a)) {
        return '01'
    }
    if (a + b < c || a + c < b || b + c < a) {
        return '00'
    }

    return "11"
}

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || a === c || b === c) {
            return '01'
        } else {
            return '11'
        }
    }
    return "00"
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let sum = 0;
    let acc;

    while (number) {
        if (number >= 10) {
            acc = number % 10;
            number = (number - acc) / 10;
            sum += acc;
        } else {
            sum += number
        }

    }
    return sum;
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    return arr.reduce((acc, num, i) => i % 2 ? acc - num : acc + num, 0) > 0
    /*let sumEv = 0;
    let sumOw = 0;
    arr.forEach((el, index) => {
        if (index % 2) {
            sumOw += el
        } else {
            sumEv += el
        }
    })
    return sumEv > sumOw*/
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let result: Array<number> = []
    array.forEach(el => {
        if (el % 1===0 && el > 0) {
            result.push(el**2)
        }
    })

    return result
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    return N * (N + 1) / 2;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let index = 0
    let result: Array<number> = []
    for (let i = 0; i < banknotes.length - 1; i++) {


        result.fill(banknotes[i], index)
    }
    return result
}