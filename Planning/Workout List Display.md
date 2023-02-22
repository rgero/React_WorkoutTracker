### Workout List Display

I believe that the visual representation that I want to achieve is something similar to how I have it set up in iCloud. In essence I would have collapsible groups that are through the year and month. Something like this

* Year
  * Month
    * Workout 1
    * Workout 2
    * Workout 3
    * Workout 4
  * Month 2
    * Workout 1
    * Workout 2
    * Workout 3
* Year 2
  * Month 2
    * Workout 1
    * Workout 2
    * Workout 3

What would the algorithm be for this.
- The input is an array of workouts
- The output would be a dictionary? First key would be the year. The first value would be another dictionary. This second dictionary could be each month and the values would be an array of workouts that occur in that month sorted by date?

### Other Thoughts
- It would be nice to have this page searchable too. We've got the data local to the user so we don't necessarily need to reach out to the database again.
- Maybe a reload button which run the fetch function again?
- I wonder if I can persist the data so when you select a workout you can view and come back without having to refetch - However you'd probably just want to refresh it anyways.
- I wonder if anyone would want to sort it by a different method? What would that second method be?