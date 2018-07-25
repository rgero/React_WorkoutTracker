// This is where we are going to store the action generators related to Workouts
import database from '../firebase/firebase'

export const addWorkout = (workout) => ({
    type: 'ADD_WORKOUT',
    workout
})

export const removeWorkout = ( id ) => ({
    type: 'REMOVE_WORKOUT',
    id
})

export const editWorkout = ( id, update = {}) => ({
    type: "EDIT_WORKOUT",
    id,
    update
})

export const startEditWorkout = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/Workouts/${id}`).update({...update})
        .then(()=>{
            dispatch(editWorkout(id, update))
        })
    }

}

// SET_Workout
export const setWorkouts = (workouts) => ({
    type: 'SET_WORKOUTS',
    workouts
});

export const startRemoveWorkouts = ( id ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/Workouts/${id}`).remove()
        .then(()=> {
            dispatch(removeWorkout(id))
        })
    }
}

export const startSetWorkouts = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/Workouts`).once('value').then((snapshot) => {
        const workouts = [];
  
        snapshot.forEach((childSnapshot) => {
            workouts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setWorkouts(workouts));
      });
    };
  };

export const startAddWorkout = (WorkoutData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', 
            note = '', 
            createdAt = 0
        } = WorkoutData;

        const Workout = {description, note, createdAt};

        return database.ref(`users/${uid}/Workouts`).push(workout).then((ref)=> {
            dispatch(addWorkout({
                id: ref.key,
                ...workout
            }))
        });
    };
};