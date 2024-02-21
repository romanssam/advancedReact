import {classNames} from "shared/lib/classNames/classNames";

describe('Хелпер classNames', () => {
    test('Тест с 1 параметром', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })
    test('Тест с additional', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('Тест с mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames('someClass', {hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    })
    test('Тест с mods когда он false', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', {hovered: true, scrollable: false}, ['class1', 'class2'])).toBe(expected)
    })
    test('Тест с mods когда он undefined', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(classNames('someClass', {hovered: undefined, scrollable: true}, ['class1', 'class2'])).toBe(expected)
    })
});