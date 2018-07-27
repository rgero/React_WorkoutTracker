const getValidExercises = (exercises, workoutID) => {
    return exercises.filter((exercise)=> {
        const textMatch = typeof text !== "string" || exercise.workoutID === workoutID

        return textMatch;
    })
}

export {getValidExercises}