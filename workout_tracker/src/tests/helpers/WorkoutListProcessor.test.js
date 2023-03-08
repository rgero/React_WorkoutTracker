import { GetMonthName } from "../../helpers/WorkoutListProcesser";

test("Gets the correct month from date", ()=> {

    const testMonthInput = "02";
    expect( GetMonthName(testMonthInput) ).toMatch("February");

})

test("Gets the correct month from date", ()=> {

    const testMonthInput = "12";
    expect( GetMonthName(testMonthInput) ).toMatch("December");

})