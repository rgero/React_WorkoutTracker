import DateFormatter from "../../helpers/DateFormatter";

test("Verifies date set correctly through Date obj", ()=> 
{
    const testDateString = "2023-02-26";
    const testDate = new Date(testDateString);
    expect(DateFormatter(testDate)).toMatch(testDateString);
})

test("Verifies date set correctly through string", ()=> 
{
    const testDateString = "2023-02-26";
    const testDate = new Date(testDateString);
    expect(DateFormatter(testDate.toISOString())).toMatch(testDateString);
})