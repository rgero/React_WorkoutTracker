export default (workoutList) => {
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
    console.log(organizedWorkouts);
}