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
    expect(Object.keys(resultDictionary["2022"]).length).toBe(2);

    // Make sure the months are the correct length
    expect(Object.keys(resultDictionary["2022"]["02"]).length).toBe(2);
})

test("Makes sure we're ordering the years properly - Descending", ()=> {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary, true);
    let expectedResults = ["2023", "2022"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we're ordering the years properly - Ascending", ()=> {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary, false);
    let expectedResults = ["2022", "2023"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we order the months properly - Descending", () => {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary["2022"], true);
    let expectedResults = ["03", "02"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we order the months properly - Ascending", () => {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let results = GetOrderedValues(resultDictionary["2022"], false);
    let expectedResults = ["02", "03"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we order the dates properly - Descending", () => {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let February2022_Results = resultDictionary["2022"]["02"];
    let results = GetOrderedValues(February2022_Results, true);
    let expectedResults = ["1", "0"];

    expect(results).toStrictEqual(expectedResults);
})

test("Makes sure we order the dates properly - Descending", () => {
    let resultDictionary = ProcessWorkoutList(TestWorkouts);
    let February2022_Results = resultDictionary["2022"]["02"];
    let results = GetOrderedValues(February2022_Results, false);
    let expectedResults = ["0", "1"];

    expect(results).toStrictEqual(expectedResults);
})