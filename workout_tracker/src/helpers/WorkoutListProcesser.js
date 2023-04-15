export const ProcessWorkoutList = (workoutList) => {
    let organizedWorkouts = {}
    for(const workout of workoutList)
    {
        let targetDate = workout.workoutDate.split('T')[0];
        let [year, month, day] = targetDate.split('-');

        let yearDictionary = {};
        if (organizedWorkouts[year])
        {
            yearDictionary = organizedWorkouts[year];
        }

        if (!yearDictionary[month])
        {
            yearDictionary[month] = []
        }
        yearDictionary[month] = [ ...yearDictionary[month], workout]

        organizedWorkouts[year] = yearDictionary;
    }
    return organizedWorkouts;
}

export const GetOrderedValues = (targetDictionary, descending=true) => {
    if (!targetDictionary)
    {
        return;
    }

    let sortedKey = Object.keys(targetDictionary);
    sortedKey.sort();  
    if (descending)
    {
        sortedKey.reverse();
    }
    return sortedKey;
}

export const GetMonthName = (monthString) => {
    // This is a silly way to do it, think of one better.
    let tempString = "2022-" + monthString + "-15";
    let date = new Date(tempString);
    return date.toLocaleString('default', { month: 'long' });
}