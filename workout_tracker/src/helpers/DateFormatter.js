export default (targetDate) => {

    if (typeof(targetDate) === 'string' || targetDate instanceof String)
    {
        targetDate = new Date(targetDate);
    }
    let formattedDate = targetDate;
    formattedDate = new Date(formattedDate.getTime());
    return formattedDate.toISOString().split('T')[0];
}