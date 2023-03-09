import { GetMonthName, GetOrderedValues, ProcessWorkoutList } from "../../helpers/WorkoutListProcesser";
import { TestWorkouts } from '../testData';

test("Gets the correct month from date", ()=> {
    const testMonthInput = "02";
    expect( GetMonthName(testMonthInput) ).toMatch("February");

})

test("Gets the correct month from date", ()=> {
    const testMonthInput = "12";
    expect( GetMonthName(testMonthInput) ).toMatch("December");
})

test("Makes sure we're creating the dictionary properly", ()=> {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);

    expect(Object.keys(resultDictionary).length).toBe(2);

    // Make sure that the years are properly created.
    expect(Object.keys(resultDictionary["2023"]).length).toBe(1);
    expect(Object.keys(resultDictionary["2022"]).length).toBe(1);
})

test("Makes sure we're ordering the years properly - Descending", ()=> {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary);
    let expectedResults = ["2023", "2022"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we're ordering the years properly - Ascending", ()=> {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary, false);
    let expectedResults = ["2022", "2023"];

    expect(results).toStrictEqual(expectedResults);
})